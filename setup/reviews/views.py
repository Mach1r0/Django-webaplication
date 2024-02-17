from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions 
from reviews.serializers import UserSerializer, GroupSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')  # Fixed typo here
    serializer_class = UserSerializer 
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class =  GroupSerializer 
    permission_classes = [permissions.IsAuthenticated]
