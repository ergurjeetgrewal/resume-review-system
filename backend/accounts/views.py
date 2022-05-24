from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from accounts.models import CustomUser
from accounts.serializers import CustomUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
import logging
db_logger = logging.getLogger('db')
# Create your views here.


class Login(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        try:
            email = request.data['email']
            password = request.data['password']
            user = authenticate(email=email, password=password)
            if user is not None:
                token = RefreshToken.for_user(user)
                data = CustomUser.objects.get(id=user.id)
                serializer = CustomUserSerializer(data)
                return Response({'token': str(token.access_token), 'refreshtoken': str(token), 'user': serializer.data, 'expiresIn': 3600}, status=200)
            return Response({'error': 'Please verify your credentials'}, status=400)
        except Exception as identifier:
            db_logger.error(identifier)
            return Response({'error': 'Please try after sometime'}, status=400)
