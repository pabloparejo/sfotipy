from django.db import models

# Create your models here.

from albums.models import Album
from artists.models import Artist

class Track (models.Model):

    album       = models.ForeignKey(Album)
    artist      = models.ForeignKey(Artist)
    title       = models.CharField(max_length=255)
    order       = models.PositiveIntegerField()
    track_file  = models.FileField(upload_to='tracks')

    def __unicode__(self):
        return self.title