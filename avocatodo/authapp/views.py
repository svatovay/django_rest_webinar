from rest_framework.viewsets import ModelViewSet
from .models import AvocatodoUser
from .serializers import AvocatodoUserModelSerializer


class AvocatodoUserModelViewSet(ModelViewSet):
    queryset = AvocatodoUser.objects.all()
    serializer_class = AvocatodoUserModelSerializer
