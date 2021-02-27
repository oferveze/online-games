from players.models import Player
from rest_framework import viewsets, permissions
from .serializers import PlayerSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    premission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PlayerSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


