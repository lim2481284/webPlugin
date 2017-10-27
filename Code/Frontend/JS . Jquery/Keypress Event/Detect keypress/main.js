$(document).ready(function() {	
	$(document).keydown(function(e) {
		$('.keyCode').html(e.which);		
		$('.keyValue').html(String.fromCharCode(e.which));
	});
});