# Generated by Django 4.0.4 on 2022-05-21 16:54

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('resumeapp', '0002_alter_resume_awards_alter_resume_certification_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
