from django.contrib.auth import get_user_model
from rest_framework import serializers, viewsets, status
from rest_framework.response import Response

from member.serializers import UserSerializer
from .models import Qna


class QnaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qna
        fields = ['qna_id', 'title', 'category', 'question_user', 'question', 'answer_user', 'answer', 'date']
