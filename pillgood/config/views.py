from django.http import HttpResponse
from rest_framework.views import APIView

from config import settings


def index(request):
    return HttpResponse("메인입니다.")