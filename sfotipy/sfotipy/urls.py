from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sfotipy.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'main.views.home'),
    url(r'^player/$', 'main.views.playing'),
    url(r'^tracks/(?P<title>[\w\-]+)', 'tracks.views.track_view'),
    url(r'^upload/(?P<path>.*)$', 'django.views.static.serve',
    				{'document_root':settings.MEDIA_ROOT}),
)