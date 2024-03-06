from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.name

class Book(models.Model):
    title  = models.CharField(max_length=50)
    author  = models.ForeignKey("Author", on_delete=models.CASCADE)
    description  = models.CharField(max_length=50)
    year  = models.IntegerField()
    pageCount  = models.IntegerField()
    bookImage  = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return self.title

