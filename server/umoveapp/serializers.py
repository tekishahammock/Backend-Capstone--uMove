from django.contrib.auth.models import User, Group
from .models import Studio, Class
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class StudioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Studio
        fields = ('url', 'name')

class ClassSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Class
        fields = ('url', 'name')
