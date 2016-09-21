# from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.
# from django.contrib.auth.mixins import LoginRequiredMixin
# LoginRequiredMixin first arg on thing you don't want people to be able to do
from django.contrib.auth.models import User, Group
from .models import Studio, Class
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer, StudioSerializer, ClassSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class StudioViewSet(viewsets.ModelViewSet):
    queryset = Studio.objects.all()
    serializer_class = StudioSerializer

class ClassViewSet(viewsets.ModelViewSet):
    queryset = Class.objects.all().order_by('-studio')
    serializer_class = ClassSerializer
