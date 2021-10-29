from rest_framework import serializers
from user.models import User

from lec.models import Lec
from lec.serializers import LecSerializer
from manager.models import Book


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['image', 'id', 'email', 'password', 'name', 'phone', 'intro', 'type', 'join_date', 'last_login']


class BookSerializer(serializers.ModelSerializer):
    email = UserSerializer(read_only=True)
    lec_id = LecSerializer(read_only=True)

    class Meta:
        model = Book
        fields = ['book_id', 'email', 'lec_id', 'status']

class LecSerializer(serializers.ModelSerializer):
    email = UserSerializer(read_only=True)
    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'room', 'date', 'time', 'level', 'email', 'number', 'status', 'lec_image', 'lec_count']