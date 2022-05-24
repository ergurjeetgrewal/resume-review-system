from django.contrib import admin
from resumeapp.models import Resume,Certificate,Education,Experience,Project,Skill
# Register your models here.
admin.site.register(Resume)
admin.site.register(Certificate)
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(Skill)