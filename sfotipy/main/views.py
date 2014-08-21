from django.shortcuts import render

from artists.models import Artist
from albums.models import Album
from tracks.models import Track

# Create your views here.

def home(request):
	albums = Album.objects.all()

	title = "Top hits"
	range = xrange(10)
	return render(request, 'song_list.html', locals())

def playing(request):
	song = Track.objects.all()[0]
	album = song.album
	artist = song.artist
	title = "Player"
	range = xrange (10)
	return render(request, 'player.html', locals())