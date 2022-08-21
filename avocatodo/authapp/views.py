from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework import mixins, viewsets

from .models import AvocatodoUser
from .serializers import AvocatodoUserModelSerializer


class AvocatodoUserCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                 mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = AvocatodoUser.objects.all()
    serializer_class = AvocatodoUserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
