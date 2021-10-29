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

app_name = 'member'
urlpatterns = [
    path('<int:id>/', views.main, name='main'),
    path('update/<int:id>/', views.update, name='update'),
    path('passwordupdate/<int:id>/', views.password_update, name='password_update'),
    path('delete/<int:id>/', views.delete, name='delete'),
    path('paylist/<int:id>/', views.paylist, name='paylist'),
    path('paylist/detail/<int:pk>/', views.pay_detail, name='pay_detail'),
    path('paylist/refund/<int:pk>/', views.pay_refund, name='pay_refund'),
    path('book/<int:id>/', views.book, name='book'),
    path('book/detail/<int:pk>/', views.book_detail, name='book_detail'),
    path('book/cancel/<int:pk>/', views.book_cancel, name='book_cancel'),
    path('book/cancel_lec/<int:pk>', views.lec_count_minus, name='lec_count_minus'),
]
