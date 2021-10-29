# Create your models here.
from django.conf import settings
from django.db import models


# Create your models here.


class Lec(models.Model):
    objects = models.Manager()
    lec_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    content = models.TextField()
    room = models.CharField(max_length=10)
    date = models.DateField()
    time = models.TimeField()
    level = models.IntegerField()
    email = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    lec_count = models.IntegerField(default=0)
    number = models.IntegerField()
    status = models.IntegerField()
    lec_image = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.title
# 
# class Image(models.Model):
#     objects = models.Manager()
#     image_id = models.AutoField(primary_key=True)
#     lec_id = models.ForeignKey('Lec', on_delete=models.CASCADE)
#     image_url = models.CharField(max_length=255)
# 
#     def __str__(self):
#         return str(self.image_id)
