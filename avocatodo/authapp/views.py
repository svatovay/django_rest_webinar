from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework import mixins, viewsets, permissions

from .models import AvocatodoUser
from .serializers import AvocatodoUserModelSerializer, AvocatodoUserCustomModelSerializer


class AvocatodoUserCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                 mixins.UpdateModelMixin, viewsets.GenericViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = AvocatodoUser.objects.all()
    serializer_class = AvocatodoUserModelSerializer

    # renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    def get_serializer_class(self):
        if self.request.version == '1.1':
            return AvocatodoUserCustomModelSerializer
        return AvocatodoUserModelSerializer
