from rest_framework import serializers
from user.models import User
from lec.models import Lec


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'intro']


class InstructorLecSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'lec_image', 'room', 'date', 'time', 'level', 'email', 'lec_count',
                  'number', 'status']
#
