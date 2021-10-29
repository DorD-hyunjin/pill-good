from django.http import HttpResponse
from lec.models import Lec
from rest_framework.decorators import api_view
from rest_framework.response import Response
from user.models import User
from instructor.serializers import UserSerializer, InstructorLecSerializer
from manager.models import Book
from lec.serializers import BookSerializer, LecSerializer


# Create your views here.


@api_view(['GET'])
def user_list(request, pk):
    """
    회원목록
    """
    book_join = Book.objects.filter(lec_id_id=pk).select_related('email')
    user_lec = User.objects.filter(id__in=[book.email_id for book in book_join])
    serializer = UserSerializer(user_lec, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def lec_list(request, id):
    """
    강의 목록 = 자신의 강의
    """
    login_user = id
    lecs = Lec.objects.filter(email_id=login_user)
    serializer = InstructorLecSerializer(lecs, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def lec_create(request):
    """
    강의 등록
    """
    serializer = LecSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()  # 등록할 때 항상 미승인 상태(status=1)
        return Response(serializer.data)
    return HttpResponse("권한이 없습니다")

