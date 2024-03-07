from rest_framework import viewsets
from .models import Book
from .serializers import BookSerializer
from rest_framework.filters import SearchFilter

# Create your views here.
class BooksViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all().order_by("title").all()
    serializer_class = BookSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title']