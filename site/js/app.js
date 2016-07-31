require.config({
	'baseUrl': '/',

	'shim': {
		'bootstrap': { 'deps': ['jquery'] },
		'backbone': { 'deps': ['underscore', 'jquery'],
						'exports': 'Backbone' }
	},

	'paths': {
		'app': 'js/app',

		//Vendor paths
		'jquery': 'lib/js/jquery.min',
		'underscore': 'lib/js/underscore-min',
		'backbone': 'lib/js/backbone-min',
		'mustache': 'lib/js/mustache.min',

		'bootstrap': 'lib/js/bootstrap.min',
	}
});

// Router
require(['js/router'], function() {
	var router = new Router;

	// App routes
	router.route("about", "about", function() {
		console.log("about");
	});

	Backbone.history.start();
});

//Navbar
require(['js/views/nav'], function() {
	var navView = new NavView;
});