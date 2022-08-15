from rest_framework import serializers
from .models import Project, ToDo


class ProjectModelSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(many=True)
    todos = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = ['name', 'repo_link', 'users', 'todos']


class ToDoModelSerializer(serializers.ModelSerializer):
    creator = serializers.StringRelatedField()
    project = serializers.StringRelatedField()

    class Meta:
        model = ToDo
        exclude = ['id']
