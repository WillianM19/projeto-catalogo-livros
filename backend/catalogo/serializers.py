from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['title', 'author', 'description', 'year', 'pageCount', 'bookImage']