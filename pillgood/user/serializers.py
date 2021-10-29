from django.contrib.auth import authenticate
from django.utils import timezone

from .models import User
from rest_framework import serializers
# from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import update_last_login


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            name=validated_data['name'],
            phone=validated_data['phone'],
            # intro=validated_data['intro'],  회원가입 이후 작성하기로 함
            type=validated_data['type'],
            # image=validated_data['image'],  회원가입 이후 작성하기로 함
        )
        return user

    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'name', 'phone', 'type', 'join_date', 'last_login']


class LoginSerializer(serializers.ModelSerializer):
    user = UserSerializer
    email = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True)
    # token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)
        user = authenticate(email=email, password=password)

        if user is None:
            return {
                'email': 'None'
            }
        try:
            update_last_login(None, user)
        except User.DoesNotExist:
            raise serializers.ValidationError(
                'User with given email and password does not exists'
            )
        return {
            'email': user.email,
            'name': user.name,
            'id': user.id,
            'is_admin': user.is_admin,
            'type': user.type,
        }

    class Meta:
        model = User
        fields = ['email', 'password']


class HelpSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=10)
    phone = serializers.CharField(max_length=13)

    def validate(self, data):
        name = data.get("name", None)
        phone = data.get("phone", None)
        user = authenticate(name=name, phone=phone)  # 검증 방법 변경 필요

        if user is None:
            return {
                'email': 'None'
            }
        else:
            return {
                'email': user.email,
            }

    class Meta:
        model = User
        fields = ['name', 'phone']


class UpdateSerializer(serializers.ModelSerializer):
    email = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=10)
    phone = serializers.CharField(max_length=13)

    def validate(self, data):
        email = data.get("email", None)
        name = data.get("name", None)
        phone = data.get("phone", None)
        user = authenticate(email=email, name=name, phone=phone)  # 검증 방법 변경 필요

        if user is None:
            return {
                'email': 'None'
            }
        else:
            return {
                'Temporary password': 'my_new_password',
                # 임시 비밀번호 난수 함수 입력
            }

    class Meta:
        model = User
        fields = ['email', 'name', 'phone']
