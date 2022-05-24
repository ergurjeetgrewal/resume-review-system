from django.urls import path
from resumeapp import views

urlpatterns = [
    path('', views.Applications.as_view(), name='index'),
    path('resume/',views.FetchResume.as_view(),name='resume')
]
