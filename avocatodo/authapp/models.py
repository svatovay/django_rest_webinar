from django.contrib.auth.models import AbstractUser
from django.db import models


class AvocatodoUser(AbstractUser):
    email = models.EmailField(verbose_name="email address", unique=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
