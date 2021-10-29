# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import PaySerializer
from .models import Membership
from .serializers import MembershipSerializer


@api_view(['GET'])
def membership_index(request):
    memberships = Membership.objects.all()
    serializer = MembershipSerializer(memberships, many=True)
    return Response(serializer.data)


# 맴버십 결제
@api_view(['POST'])
def membership_pay(request):
    print(request.data)
    serializer = PaySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['GET'])
def membership(request, pk):
    memberships = Membership.objects.get(membership_id=pk)
    serializer = MembershipSerializer(memberships, many=False)
    return Response(serializer.data)
