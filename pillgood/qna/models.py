from django.conf import settings
from django.db import models
from django.utils import timezone


# Create your models here.

class Qna(models.Model):
    objects = models.Manager()

    qna_id = models.AutoField(primary_key=True)  # 상담pk
    title = models.CharField(max_length=100)  # 제목
    category = models.CharField(max_length=10) #카테고리
    question_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='question_user')  # 작성자(회원)
    # question_user = models.CharField(max_length=100) # 작성자(회원)
    question = models.TextField()  # 내용
    answer_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='answer_user', null=True)  # 답변자(회원)
    answer = models.TextField(null=True)  # 답변
    date = models.DateTimeField(default=timezone.now)  # 등록일
