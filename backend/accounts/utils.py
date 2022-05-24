from django.core.mail import EmailMessage
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.tasks import send_mail

class Util:
    @staticmethod
    def send_email_verification_link(request,user):
        token = RefreshToken.for_user(user).access_token
        # current_site = get_current_site(request).domain
        current_site = 'https://studentadmission-frontend.vercel.app/'
        # current_site = '127.0.0.1:3000/'
        # relativeLink = reverse('email-verify')
        relativeLink = 'emailverify'
        absurl = 'http://'+current_site+relativeLink+'?token='+str(token)
        email_body = 'Hi '+user.first_name+',\n\n'+'Please verify your email by clicking on the link below:\n\n'+absurl+'\n\n'+'Thank you.'
        data = {
            'body': email_body,
            'subject': 'Email Verification',
            'to': (user.email,),
        }
        print('calling send mail celery')
        send_mail.delay(data)
        print('returend from celery')
        return True
    
    @staticmethod
    def send_password_reset_link(request,user):
        token = RefreshToken.for_user(user).access_token
        # current_site = get_current_site(request).domain
        # current_site = '127.0.0.1:3000/'
        current_site = 'https://studentadmission-frontend.vercel.app/'
        # relativeLink = reverse('forget-password')
        relativeLink = 'setnewpassword'
        absurl = 'http://'+current_site+relativeLink+'?token='+str(token)
        email_body = 'Hi '+user.first_name+',\n\n'+'Please set your new password by clicking on the link below:\n\n'+absurl+'\n\n'+'Thank you.'
        data =  {
            'body': email_body,
            'subject': 'Password Reset',
            'to': (user.email,),
        }
        send_mail.delay(data)
        return True
    
    @staticmethod
    def generate_password():
        import random
        import string
        password = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(8))
        return password
    
    @staticmethod
    def send_new_password(user,password):
        email_body = 'Hi '+user.first_name+',\n\n'+'Your new password is: '+str(password)+'\n\n'+'Thank you.'
        data =  {
            'body': email_body,
            'subject': 'New Password',
            'to': (user.email,),
        }
        send_mail.delay(data)
        return True