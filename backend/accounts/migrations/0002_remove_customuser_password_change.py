# Generated by Django 4.0.4 on 2022-05-21 12:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='password_change',
        ),
    ]
