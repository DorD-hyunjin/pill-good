from rest_framework import serializers
from lec.models import Lec
from manager.models import Book
from user.models import User


class LecSerializer(serializers.ModelSerializer):
    lec_image = serializers.CharField(required=False, allow_blank=True)
    # email = serializers.CharField(source="email.name")
    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'lec_image', 'room', 'date', 'time', 'level', 'email', 'lec_count',
                  'number', 'status']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id']


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['book_id', 'email', 'lec_id', 'status']

class LecDetailSerializer(serializers.ModelSerializer):
    lec_image = serializers.CharField(required=False, allow_blank=True)
    email = serializers.CharField(source="email.name")
    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'lec_image', 'room', 'date', 'time', 'level', 'email', 'lec_count',
                  'number', 'status']
