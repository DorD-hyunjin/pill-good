from django.conf import settings
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

# 유저 생성을 위한 헬퍼 클래스
from rest_framework.authtoken.models import Token


class UserManager(BaseUserManager):

    # 사용자 user 생성
    def create_user(self, email, name, phone, type, password=None):
        """
        주어진 이메일, 이름, 비밀번호 등 개인정보로 User 인스턴스 생성
        """
        if not email:
            raise ValueError('Email을 정확히 입력해주세요.')
        if not name:
            raise ValueError('이름을 입력해주세요.')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            phone=phone,
            type=type
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    # 관리자 user 생성
    def create_superuser(self, email, name, phone, password):
        """
        주어진 이메일, 닉네임, 비밀번호 등 개인정보로 User 인스턴스 생성
        단, 최상위 사용자이므로 권한을 부여한다.
        """
        user = self.create_user(
            email=email,
            password=password,
            name=name,
            phone=phone,
            type=1,
        )
        # 관리자 superuser 권한부여(admin으로 변경가능)
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


# 실제 모델을 상속받아 생성하는 클래스
class User(AbstractBaseUser):
    email = models.EmailField(unique=True, max_length=255)
    name = models.CharField(max_length=10)
    phone = models.CharField(max_length=13)
    intro = models.TextField(null=True, default='')
    type = models.IntegerField()
    image = models.CharField(max_length=200, null=True, default='')
    # image = models.ImageField(blank=True, null=True)
    join_date = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField('last login', null=True)

    # 헬퍼 클래스 사용
    objects = UserManager()

    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    # 사용자의 username field는 email로 설정
    USERNAME_FIELD = 'email'

    # 필수로 작성해야하는 field
    REQUIRED_FIELDS = ['name', 'phone']

    def __str__(self):
        return self.name + " " + self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin
