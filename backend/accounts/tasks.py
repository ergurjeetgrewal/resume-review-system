from celery import shared_task
from django.core.mail import EmailMessage
from django.conf import settings

@shared_task(bind=True)
def send_mail(self,data):
    email = EmailMessage(
    subject = data['subject'],
    body = data['body'],
    from_email = settings.EMAIL_HOST_USER,
    to = data['to']
    )
    email.send()
    return 'Done'
