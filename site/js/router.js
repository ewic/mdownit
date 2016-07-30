define([ 'jquery','underscore','backbone' ], function( $,_,Backbone ) {

	console.log('Router loaded');

	Router = Backbone.Router.extend({

		routes: {
			"": "index",
			"home": "home"
		},

		index: function() {
			console.log("index");
		},

		home: function() {
			console.log("home");
		}

	})

	return Router;

});

