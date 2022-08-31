from rest_framework.serializers import HyperlinkedModelSerializer
from .models import AvocatodoUser


class AvocatodoUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = AvocatodoUser
        fields = ('username', 'first_name', 'last_name', 'email')


class AvocatodoUserCustomModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = AvocatodoUser
        fields = ('username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_staff')
