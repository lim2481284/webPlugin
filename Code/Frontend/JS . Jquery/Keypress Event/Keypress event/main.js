$(document).ready(function() {	

	/*========================
			Demo 1 
	=========================*/
	$(document).keydown(function(e) {
		if(e.which == 13) {
			alert("Hello World");
		}	
	});

	/*========================
			Demo 2 
	=========================*/	
	$('#target').keyup(function(e) {
		$('#target').attr('class',$('#target').val());
	});
	
	
	/*========================
			Demo 3 
	=========================*/	
	$(document).keydown(function(e) {
		if(e.which == 70) {
			if ($(".testing").length > 0) {
				alert("Found");		
			}		
		}
	});	
	
});