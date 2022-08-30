import json
import os

from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string

from authapp.models import AvocatodoUser

JSON_PATH = 'authapp/jsons'


def load_from_json(file_name):
    with open(os.path.join(JSON_PATH, file_name + '.json'), 'r') as infile:
        return json.load(infile)


class Command(BaseCommand):
    help = 'Создание случайного пользователя'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int, help='Количество создаваемых пользователей')

    def handle(self, *args, **kwargs):
        superusers = load_from_json('superusers')
        total = kwargs['total']
        for superuser in superusers:
            AvocatodoUser.objects.create_superuser(
                username=superuser['username'],
                first_name=superuser['first_name'],
                last_name=superuser['last_name'],
                email=superuser['email'],
                password=superuser['password'])
        for i in range(total):
            AvocatodoUser.objects.create_user(
                username=get_random_string(5),
                first_name=get_random_string(8),
                last_name=get_random_string(8),
                email=get_random_string(10),
                password='123')
