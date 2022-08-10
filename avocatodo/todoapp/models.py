from django.db import models
from authapp.models import AvocatodoUser


class Project(models.Model):
    name = models.CharField(max_length=100, blank=False, unique=True)
    repo_link = models.URLField(unique=True, default='')
    users = models.ManyToManyField(AvocatodoUser)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    name = models.CharField(max_length=100, blank=False, unique=True)
    project = models.ForeignKey(Project, related_name='todos', on_delete=models.CASCADE)
    description = models.TextField(max_length=500, blank=False)
    create_date = models.DateField(auto_now_add=True)
    update_date = models.DateField(auto_now=True)
    creator = models.ForeignKey(AvocatodoUser, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
