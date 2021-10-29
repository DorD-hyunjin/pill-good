from rest_framework.decorators import api_view
from rest_framework.response import Response

from lec.models import Lec
from lec.serializers import LecSerializer
from manager.models import Book
from manager.serializers import BookSerializer
from membership.models import Pay
from user.models import User
from .serializers import UserSerializer, PaySerializer  # , PasswordSerializer


@api_view(['GET'])
def main(request, id):
    """
    회원정보 확인
    """

    # 프론트에서 로그인 유저 아이디 가져오기
    login_user = id

    # 유저정보 가져와서 serializer로 데이터 정렬
    user = User.objects.get(id=login_user)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def update(request, id):
    """
    회원정보 업데이트, 비밀번호, 소개, 연락처 등
    """

    # 프론트에서 로그인 유저 아이디 가져오기
    login_user = id
    user = User.objects.get(id=login_user)

    serializer = UserSerializer(instance=user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['PUT'])
def password_update(request, id):
    """
    회원정보 업데이트, 비밀번호, 소개, 연락처 등
    """
    # 프론트에서 로그인 유저 아이디 가져오기
    login_user = id
    user = User.objects.get(id=login_user)

    serializer = UserSerializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['PUT'])
def delete(request, id):
    """
    회원 탈퇴 is_active 0으로 변경, 데이터 삭제X
    """

    # 프론트에서 로그인 유저 아이디 가져오기
    login_user = id

    # serializer로 데이터 정렬해 update
    user = User.objects.get(id=login_user)
    serializer = UserSerializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['GET'])
def paylist(request, id):
    """
    결제 조회
    """

    # 프론트에서 로그인 유저 아이디 가져오기
    login_user = id

    # pay정보 가져와서 serializer로 데이터 정렬
    pays = Pay.objects.filter(email=login_user)
    serializer = PaySerializer(pays, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def pay_detail(request, pk):
    """
    결제 디테일
    """
    # serializer로 데이터 정렬해 update
    pay = Pay.objects.get(pay_id=pk)
    serializer = PaySerializer(pay, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def pay_refund(request, pk):
    """
    환불
    """

    # serializer로 데이터 정렬해 update
    pay = Pay.objects.get(pay_id=pk)
    print(111)
    serializer = PaySerializer(instance=pay, data=request.data)
    print(2222)
    if serializer.is_valid():
        serializer.save()
        print(3333)
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['GET'])
def book(request, id):
    """
    예약한 강의 목록 보기
    """

    # 세션에서 로그인 유저 아이디 가져오기
    login_user = id

    # 예약정보 가져와서 serializer로 데이터 정렬
    books = Book.objects.filter(email=login_user)
    serializer = BookSerializer(books, many=True)

    # 예약정보 가져와서 count(역참조)

    return Response(serializer.data)


@api_view(['GET'])
def book_detail(request, pk):
    """
    예약한 강의 디테일 보기
    """
    # 예약정보 가져와서 serializer로 데이터 정렬
    books = Book.objects.get(book_id=pk)
    serializer = BookSerializer(books, many=False)

    # 예약정보 가져와서 count(역참조)

    return Response(serializer.data)


@api_view(['PUT'])
def book_cancel(request, pk):
    """
    예약한 강의 취소
    """

    # 요청 들어온 예약 정보 삭제
    book = Book.objects.get(book_id=pk)
    serializer = BookSerializer(instance=book, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['PUT'])
def lec_count_minus(request, pk):
    """
    강의 예약 숫자 줄이기
    """
    print(request.data)
    lec = Lec.objects.get(pk=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
