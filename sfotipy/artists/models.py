from django.db import models

# Create your models here.

class Artist (models.Model):
    biography   = models.TextField(blank=True)
    first_name  = models.CharField(max_length=255)
    last_name   = models.CharField(max_length=255, blank=True)

    def __unicode__(self):
        return self.first_name