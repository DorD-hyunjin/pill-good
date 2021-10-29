from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.manager_user, name="manager_user"),
    path('user/access/<int:pk>/', views.manager_user_access, name="manager_user_access"),
    path('user/<int:pk>/', views.manager_user_detail, name="manager_user_detail"),
    path('lec/', views.manager_lec, name="manager_lec"),
    path('lec/<int:pk>/', views.manager_lec_detail, name="manager_lec_detail"),
    path('lec/access/<int:pk>/', views.manager_lec_access, name="manager_lec_access"),
    path('lec/update/<int:pk>/', views.manager_lec_update, name="manager_lec_update"),
    path('lec/delete/<int:pk>/', views.manager_lec_delete, name="manager_lec_delete"),
    path('membership/create/', views.manager_membership_create, name="manager_membership_create"),
    path('membership/', views.manager_membership, name="manager_membership"),
    path('membership/access/<int:pk>/', views.manager_membership_access, name="manager_membership_access"),
    # path('refund/', views.manager_refund, name="manager_refund"),
    # path('refund/<int:pk>/', views.manager_refund_detail, name="manager_refund_detail"),
    # path('refund/access/<int:pk>/', views.manager_refund_access, name="manager_refund_access"),
]