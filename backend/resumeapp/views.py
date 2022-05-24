import json
from rest_framework.views import APIView
from rest_framework.response import Response
from resumeapp.models import Certificate, Education, Experience, Project, Resume, Skill
from resumeapp.serializers import CertificateSerializer, EducationSerializer, ExperienceSerializer, ProjectSerializer, ResumeSerializer, SkillsSerializer

# Create your views here.


class Applications(APIView):
    def get(self, request):
        # only admin allowed to fetch all the resumes
        if request.user.is_admin:
            resumes = Resume.objects.all().order_by('-createdAt')
            serializer = ResumeSerializer(resumes, many=True)
            return Response(serializer.data, status=200)
        return Response({'message': 'Invalid user'}, status=403)

    def post(self, request):
        # only admin is allowed to add new resume
        # authenticated users can easily add their resume but in this test senerio admin is the only one who is allowed to create and update resumes
        if request.user.is_admin:
            serializer = ResumeSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                data = json.loads(request.data['data'])
                if data:
                    resume = serializer.data['id']
                    for value in data:
                        for key, value in value.items():
                            if key == 'education':
                                value['resume'] = resume
                                serializer = EducationSerializer(data=value)
                                if serializer.is_valid():
                                    serializer.save()
                            elif key == 'experience':
                                value['resume'] = resume
                                serializer = ExperienceSerializer(data=value)
                                if serializer.is_valid():
                                    serializer.save()
                            elif key == 'projects':
                                value['resume'] = resume
                                serializer = ProjectSerializer(data=value)
                                if serializer.is_valid():
                                    serializer.save()
                            elif key == 'skills':
                                value['resume'] = resume
                                serializer = SkillsSerializer(data=value)
                                if serializer.is_valid():
                                    serializer.save()
                            elif key == 'certificate':
                                value['resume'] = resume
                                serializer = CertificateSerializer(data=value)
                                if serializer.is_valid():
                                    serializer.save()
                return Response({'message': 'Resume added successfully'}, status=201)
            return Response({'message': 'Invalid Data Please refresh the page'}, status=400)
        return Response({'message': 'Invalid user'}, status=403)

class FetchResume(APIView):
    def post(self,request):
        if request.user.is_admin:
            id = request.data['id']
            resume = Resume.objects.get(id=id)
            education = Education.objects.filter(resume=resume)
            skill = Skill.objects.filter(resume=resume)
            project = Project.objects.filter(resume=resume)
            experience = Experience.objects.filter(resume=resume)
            certificate = Certificate.objects.filter(resume=resume)
            education = EducationSerializer(education,many=True)
            skill = SkillsSerializer(skill,many=True)
            project = ProjectSerializer(project,many=True)
            experience = ExperienceSerializer(experience,many=True)
            certificate = CertificateSerializer(certificate,many=True)
            resume = ResumeSerializer(resume)
            return Response({'resume':resume.data,'education':education.data,'skill':skill.data,'project':project.data,'experience':experience.data,'certificate':certificate.data},status=200)
    def put(self, request):
    # only admin is allowed to accept and reject the resume applciations
        if request.user.is_admin:
            resume = Resume.objects.get(id=request.data['id'])
            serializer = ResumeSerializer(resume,data=request.data,partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message':'Resume Updated successfully'}, status=201)
            return Response({'message': 'Invalid Data Please refresh the page'}, status=400)
        return Response({'message': 'Invalid user'}, status=403)