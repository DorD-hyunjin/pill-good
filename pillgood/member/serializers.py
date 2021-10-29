from django.contrib.auth import get_user_model
from rest_framework import serializers, viewsets, status
from rest_framework.response import Response

from membership.models import Pay
from membership.serializers import MembershipSerializer
from qna.models import Qna

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=10, required=False)
    phone = serializers.CharField(max_length=13, required=False)
    intro = serializers.CharField(required=False, allow_blank=True)
    image = serializers.CharField(required=False, allow_blank=True)
    type = serializers.IntegerField(required=False)
    is_active = serializers.IntegerField(required=False)

    class Meta:
        model = User
        fields = ['id', 'name', 'phone', 'intro', 'image', 'type', 'is_active']


class PaySerializer(serializers.ModelSerializer):
    email = UserSerializer(read_only=True)
    membership_id = MembershipSerializer(read_only=True)

    class Meta:
        model = Pay
        fields = ['pay_id', 'email', 'pay_type', 'remain', 'pay_date', 'end_date', 'membership_id', 'status']


class PayViewSet(viewsets.ModelViewSet):
    serializer_class = PaySerializer

    def create(self, validated_data):
        serializer = self.get_serializer(data=self.request.data)
        email_id_for_contact = self.request.data.pop('email_id')
        email_instance = User.objects.filter(id=email_id_for_contact).first()
        if not serializer.is_valid():
            return Response(serializer.errors)
        data = serializer.validated_data
        serializer.save(email=email_instance)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class QnaSerializer(serializers.ModelSerializer):
    question_user = UserSerializer(read_only=True)
    answer_user = UserSerializer(allow_null=True, required=False, read_only=True)
    answer = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Qna
        fields = ['qna_id', 'title', 'category', 'question_user', 'question', 'answer_user', 'answer', 'date']


class QnaViewSet(viewsets.ModelViewSet):
    serializer_class = QnaSerializer

    def create(self, validated_data):
        serializer = self.get_serializer(data=self.request.data)
        question_user_id_for_contact = self.request.data.pop('question_user_id')
        question_user_instance = User.objects.filter(id=question_user_id_for_contact).first()
        if not serializer.is_valid():
            return Response(serializer.errors)
        data = serializer.validated_data
        serializer.save(email=question_user_instance)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
