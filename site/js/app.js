require.config({
	'baseUrl': '/',

	'shim': {
		'bootstrap': { 'deps': ['jquery'] }
	},

	'paths': {
		'app': 'js/app',

		//Vendor paths
		'jquery': 'lib/js/jquery.min',
		'underscore': 'lib/js/underscore-min',
		'backbone': 'lib/js/backbone-min',

		'bootstrap': 'lib/js/bootstrap.min',
	}
});

define([ 'jquery', 'underscore', 'backbone', 'bootstrap' ],function( $, _, Backbone ) {
	console.log($);
	console.log(_);
	console.log(Backbone);
});