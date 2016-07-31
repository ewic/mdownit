define([ 'jquery','underscore','backbone' ], function( $,_,Backbone ) {

	Router = Backbone.Router.extend({

		routes: {
			"": "index",
		},

		index: function() {
			console.log("home");
		},

	})

	return Router;

});

