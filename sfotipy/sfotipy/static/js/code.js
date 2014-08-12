var path = location.pathname.split('/')[1];

function setActive(){
	if (!path){
		path = 'home';
	}
	$('#' + path).addClass('active');

	if (path == 'checkout'){
		$cart_btn.addClass('active')
	}
}


// Backbone MV*

Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({})
Sfotipy.Songs = Backbone.Collection.extend({
	model: Sfotipy.Song
})

Sfotipy.SongView = Backbone.View.extend({

	className: 'item border-bottom',
	events: {
		// 'EVENT SELECTOR: FUNCTION'
		'click .action.icon-add': 'add'
	},
	tagName: 'li',
	template: Handlebars.compile($('#song-template').html()),


	// Functions
	add: function(){
		alert(this.model.get('name'))
	},

	initialize: function(){
		this.listenTo(this.model, 'change', this.render, this)
	},

	render: function(){
		var html = this.template(this.model.toJSON())
		this.$el.html(html)
	}
});

window.Sfotipy = Sfotipy;



setActive();
