from django.db import models

from artists.models import Artist


class Album (models.Model):
    artist = models.ForeignKey(Artist)
    cover = models.ImageField(upload_to='covers')
    name = models.CharField(max_length=255)

    def __unicode__(self):
        return self.name