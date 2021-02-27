from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Player(models.Model):
    username = models.CharField(max_length=15, unique=True)
    game_time = models.DurationField()
    flips = models.BigIntegerField()
    owner = models.ForeignKey(User, related_name="players", on_delete=models.CASCADE)
    finish_at = models.TimeField(auto_now=True)
