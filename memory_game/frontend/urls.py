from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('game', views.index),
    path('contact', views.index)
]
