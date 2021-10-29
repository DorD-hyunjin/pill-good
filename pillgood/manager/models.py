from django.db import models
from django.conf import settings
from lec.models import Lec

# Create your models here.
class Book(models.Model):
    objects = models.Manager()
    book_id = models.AutoField(primary_key=True)
    email = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    lec_id = models.ForeignKey(Lec, on_delete=models.CASCADE)
    status = models.IntegerField()

    def __str__(self):
        return str(self.book_id)