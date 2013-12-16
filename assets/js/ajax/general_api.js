$(document).ready(function() {
	
	// Establecer base_url
	var hostname = location.hostname; // Puede ser "localhost" o "xx.com.ar"
	var pathname = location.pathname;

	window.base_url = 'http://' + hostname + '/';

});
