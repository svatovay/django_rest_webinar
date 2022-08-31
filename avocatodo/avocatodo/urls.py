"""avocatodo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework import permissions
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from authapp.views import AvocatodoUserCustomViewSet
from todoapp.views import ProjectModelFilterViewSet, ToDoModelFilterViewSet

schema_view = get_schema_view(
    openapi.Info(
        title='AvocaToDo',
        default_version='1.0',
        description='Documentation to out project',
        contact=openapi.Contact(email='test@gmail.com'),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
router.register('avocatodousers', AvocatodoUserCustomViewSet)
router.register('projects', ProjectModelFilterViewSet)
router.register('todos', ToDoModelFilterViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include(router.urls)),

    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', obtain_auth_token),

    path('swagger/', schema_view.with_ui('swagger')),
    path('redoc/', schema_view.with_ui('redoc')),
]
