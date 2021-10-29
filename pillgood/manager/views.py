from rest_framework.response import Response
from rest_framework.decorators import api_view
from manager.serializers import UserSerializer,LecSerializer
from membership.serializers import MembershipSerializer, PaySerializer
from user.models import User
from lec.models import Lec
from membership.models import Pay, Membership
# Create your views here.


# user
@api_view(['GET'])
def manager_user(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def manager_user_access(request, pk):
    user = User.objects.get(id=pk)
    user.type = request.data['type']
    user.save()
    return Response("access success")

@api_view(['GET'])
def manager_user_detail(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


# lec
@api_view(['GET'])
def manager_lec(request):
    lecs = Lec.objects.all()
    serializer = LecSerializer(lecs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def manager_lec_detail(request, pk):
    lec = Lec.objects.get(lec_id=pk)
    serializer = LecSerializer(lec, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def manager_lec_access(request, pk):
    lec = Lec.objects.get(lec_id=pk)
    lec.status = request.data['status']
    lec.save()
    return Response("access success")

@api_view(['PUT'])
def manager_lec_update(request, pk):
    lec = Lec.objects.get(lec_id=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def manager_lec_delete(request, pk):
    lec = Lec.objects.get(lec_id=pk)
    lec.delete()
    return Response('Delete Lec')


# membership
@api_view(['POST'])
def manager_membership_create(request):
    serializer = MembershipSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["GET"])
def manager_membership(request):
    memberships = Membership.objects.all()
    serializer = MembershipSerializer(memberships, many=True)
    return Response(serializer.data)

@api_view(["PUT"])
def manager_membership_access(request, pk):
    membership = Membership.objects.get(membership_id=pk)
    membership.status = request.data['status']
    membership.save()
    return Response("access success")


# refund
# @api_view(['GET'])
# def manager_refund(request):
#     pays = Pay.objects.all()
#     serializer = PaySerializer(pays, many=True)
#     return Response(serializer.data)
#
# @api_view(['GET'])
# def manager_refund_detail(request, pk):
#     pay = Pay.objects.get(pay_id=pk)
#     serializer = PaySerializer(pay, many=False)
#     return Response(serializer.data)
#
# @api_view(['PUT'])
# def manager_refund_access(request, pk):
#     pay = Pay.objects.get(pay_id=pk)
#     pay.status = request.data['status']
#     pay.save()
#     return Response("access success")
