# Generated by Django 4.0.4 on 2022-05-24 09:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resumeapp', '0007_remove_resume_awards_remove_resume_certification_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Skills',
            new_name='Skill',
        ),
    ]