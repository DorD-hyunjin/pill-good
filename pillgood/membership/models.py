from django.conf import settings
from django.db import models
from django.utils import timezone


# Create your models here.
class Membership(models.Model):
    objects = models.Manager()

    membership_id = models.AutoField(primary_key=True)
    number = models.IntegerField()  # 횟수
    period = models.IntegerField()  # 기간
    price = models.IntegerField()  # 가격
    type = models.IntegerField()  # 유형
    status = models.IntegerField()  #상태

    def __str__(self):
        return self.type


class Pay(models.Model):
    objects = models.Manager()

    pay_id = models.AutoField(primary_key=True)  # 결제pk
    email = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.RESTRICT)  # 회원
    pay_date = models.DateTimeField(default=timezone.now)  # 결제일시
    pay_type = models.IntegerField()  # 결제방식
    remain = models.IntegerField()  # 잔여횟수
    end_date = models.DateField()  # 종료일자
    membership_id = models.ForeignKey('Membership', on_delete=models.RESTRICT)  # 멤버십
    refund_date = models.DateTimeField(null=True)  # 환불일시
    status = models.IntegerField()  # 상태
