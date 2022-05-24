from django.db import models

# Create your models here.
class Resume(models.Model):
    
    RESUME_STATUS = (
        ('applied', 'applied'),
        ('accepted', 'accepted'),
        ('rejected', 'rejected'),
    )
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    mobile = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    status = models.CharField(max_length=100, choices=RESUME_STATUS,default='applied')
    resume = models.FileField(upload_to='resumes/')
    date = models.DateField(auto_now=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Education(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    courseName = models.CharField(max_length=100)
    instituteName = models.CharField(max_length=100)
    courseStartMonth = models.IntegerField()
    courseStartYear =   models.IntegerField()
    courseEndMonth = models.IntegerField()
    courseEndYear = models.IntegerField()
    

    def __str__(self):
        return self.resume.name
    
class Skill(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    skill = models.CharField(max_length=100)

    def __str__(self):
        return self.resume.name
    
class Project(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    projectName = models.CharField(max_length=100)
    projectDesc = models.TextField()
    projectStartMonth = models.IntegerField()
    projectStartYear =   models.IntegerField()
    projectEndMonth = models.IntegerField()
    projectEndYear = models.IntegerField()

    def __str__(self):
        return self.resume.name

class Experience(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    position = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    companyStartMonth = models.IntegerField()
    companyStartYear =   models.IntegerField()
    companyEndMonth = models.IntegerField()
    companyEndYear = models.IntegerField()

    def __str__(self):
        return self.resume.name

class Certificate(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    certificate = models.CharField(max_length=100)
    desc = models.TextField()
    StartMonth = models.IntegerField()
    StartYear =   models.IntegerField()
    EndMonth = models.IntegerField()
    EndYear = models.IntegerField()

    def __str__(self):
        return self.resume.name