from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import AvocatodoUser


class AvocatodoUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = AvocatodoUser
        fields = ('username', 'first_name', 'last_name', 'email')
