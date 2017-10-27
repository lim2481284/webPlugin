$(document).ready(function() {	

	/*========================
		Demo 1 - Single key 
	=========================*/
	Mousetrap.bind('4', function() {
		alert("Your pressed 4 ");		
	});
	
	
	/*========================
		Demo 2 - Multiple key
	=========================*/	
	Mousetrap.bind('1 2 3 4', function() {
		alert("Your pressed 1 2 3 4 ");
	});
	
	
	/*========================
		Demo 3 - Combination key
	=========================*/	
	Mousetrap.bind('shift+alt+4', function(e) {
		alert("Your pressed Shift + Alt + 4 ");
		return false;
	});
	
});