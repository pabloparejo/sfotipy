var path = location.pathname.split('/')[1];

function setActive(){
	if (!path){
		path = 'home'
	}
	$('#' + path).addClass('active')
}

setActive();


Sfotipy = {}

Sfotipy.Song = Backbone.Model.extend({})

Sfotipy.SongsCollection = Backbone.Collection.extend({
    model: Sfotipy.Song
})

Sfotipy.SongView = Backbone.View.extend({

    events: {
        'click .action.icon-add': 'add'
    },

    tagName: 'li',
    className: 'item border-bottom',
    template: Handlebars.compile($('#song-template').html()),

    add: function (e){
        alert(this.model.get('name'))
        e.preventDefault()
    },

    initialize: function(){
        this.listenTo(this.model, "change", this.render, this)
    },

    render: function () {
        var html = this.template(this.model.toJSON())
        console.log(this.el)
        this.$el.prepend(html)
    }
})

Sfotipy.Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "album/:name": "album",
        "profile/:username": "profile"
    },

    index: function(){
        console.log("index");
    },

    album: function(name) {
        console.log("Album:" + name)
    },

    profile: function(username){
        console.log("Username:" + username)
    }

})

Sfotipy.app = new Sfotipy.Router()
Backbone.history.start({pushState: true})

window.Sfotipy = Sfotipy;




