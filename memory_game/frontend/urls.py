from django.urls import path
from . import views

# Any changes in the patsh
# should also be aplied on
# the routes on the frontend

urlpatterns = [
    path('', views.index),
    path('login', views.index),
    path('register', views.index),
    path('game', views.index),
    path('leaderboard', views.index),
    path('contact', views.index),
]
