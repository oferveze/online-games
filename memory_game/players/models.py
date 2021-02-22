from django.db import models

# Create your models here.
class Player(models.Model):
    username = models.CharField(max_length=15, unique=True)
    game_time = models.DurationField()
    steps = models.BigIntegerField()
    finish_at = models.TimeField(auto_now=True)
