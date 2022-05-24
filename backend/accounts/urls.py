from django.urls import path
from accounts import views
from rest_framework_simplejwt.views import (
    TokenVerifyView,
    TokenRefreshView,
)

urlpatterns = [
    path('token/verify/', TokenVerifyView.as_view(), name='verify_token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token'),
    path('login/', views.Login.as_view(), name='Login'),
]
