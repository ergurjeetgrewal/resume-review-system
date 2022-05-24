from rest_framework import serializers
from accounts.models import CustomUser as User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id','email', 'password', 'password2','first_name','middle_name','last_name','mobile_number', 'is_staff', 'is_active','is_superuser','is_admin','is_client')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            middle_name=validated_data['middle_name'],
            last_name=validated_data['last_name'],
            mobile_number=validated_data['mobile_number'],
            is_staff=validated_data['is_staff'],
            is_active=validated_data['is_active'],
            is_admin=validated_data['is_principal'],
            is_client=validated_data['is_student'],
        )

        user.set_password(validated_data['password'])
        user.save()
        return user