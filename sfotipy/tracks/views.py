from django.shortcuts import render, get_object_or_404
from .models import Track
# Create your views here.

def track_view(request, title):
    title = title.replace('-', ' ')
    print title
    track = get_object_or_404(Track, title=title)

    bio = track.artist.biography

    return render(request, 'track.html', locals())
