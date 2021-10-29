"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.lec_index, name='lec_index'),
    path('<int:pk>/', views.lec_detail, name='lec_detail'),
    path('create/book/<int:pk>/', views.book_create, name='book_create'),
    path('create/book_lec/<int:pk>/', views.lec_count_plus, name='lec_count_plus'),
    path('paylist/<int:pk>/', views.user_paylist, name='user_paylist'),
    path('create/book_pay/<int:pk>/', views.book_count_minus, name='book_count_minus')

]
