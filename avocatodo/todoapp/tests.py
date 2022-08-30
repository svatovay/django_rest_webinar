import json

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from authapp.views import AvocatodoUserCustomViewSet
from .views import ProjectModelFilterViewSet
from authapp.models import AvocatodoUser
from .models import Project, ToDo


class TestProjectViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelFilterViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail(self):
        project = Project.objects.create(
            name='test_project_666',
        )

        client = APIClient()
        response = client.get(f'/api/projects/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestToDoViewSet(APITestCase):

    def test_get_list(self):
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_todo(self):
        admin = AvocatodoUser.objects.create_superuser(
            'admin',
            'admin@admin.com',
            'admin123456'
        )
        self.client.login(username='admin', password='admin123456')

        user = AvocatodoUser.objects.create_user(
            username='tester',
            password='admin123456',
            first_name='test',
            last_name='test1',
            email='test@test.test',

        )

        project = Project.objects.create(
            name='test_project_666',
        )

        todo = ToDo.objects.create(
            name='test_todo_666',
            project=project,
            description='-',
            creator=user,
        )
        response = self.client.get(f'/api/todos/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.patch(f'/api/todos/{todo.id}/', data={'name': 'test_todo_777'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = ToDo.objects.get(id=todo.id)
        self.assertEqual(todo.name, 'test_todo_777')

    def test_edit_mixer(self):
        admin = AvocatodoUser.objects.create_superuser(
            'admin',
            'admin@admin.com',
            'admin123456'
        )
        self.client.login(username='admin', password='admin123456')

        todo = mixer.blend(ToDo)
        response = self.client.get(f'/api/todos/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.patch(f'/api/todos/{todo.id}/', data={'name': 'test_todo_mixer'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = ToDo.objects.get(id=todo.id)
        self.assertEqual(todo.name, 'test_todo_mixer')
