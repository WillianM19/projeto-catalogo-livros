from django.db import models

class Book(models.Model):
    title  = models.CharField(max_length=50)
    author  = models.CharField(max_length=50)
    description  = models.CharField(max_length=500)
    year  = models.IntegerField()
    pageCount  = models.IntegerField()
    bookImage  = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return self.title

