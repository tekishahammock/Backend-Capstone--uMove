# from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.

from django.contrib.auth.models import User, Group
from .models import Studio, Class
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer, StudioSerializer, ClassSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class StudioViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows studios to be viewed or edited.
    """
    queryset = Studio.objects.all()
    serializer_class = StudioSerializer

class ClassViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows classes to be viewed or edited.
    """
    queryset = Class.objects.all()
    serializer_class = ClassSerializer
