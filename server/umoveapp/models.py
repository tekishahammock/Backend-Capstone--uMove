from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Studio(models.Model):
    name = name = models.CharField(max_length=140)
    address1 = models.CharField(max_length=200)
    address2 = models.CharField(max_length=200)
    city = models.CharField(max_length=140)
    state = models.CharField(max_length=2)
    zipcode = models.IntegerField()
    phone = models.IntegerField()
    email = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Class(models.Model):
    name = models.CharField(max_length=140)
    description = models.CharField(max_length=400)
    tag = models.CharField(max_length=140)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    capacity = models.IntegerField()
    studio = models.ForeignKey(Studio, on_delete=models.CASCADE)
    students = models.ManyToManyField(User)
    cost = models.IntegerField()

    def __str__(self):
        return self.name
