$(document).ready(function () {

	/**
		API trigger handler
	**/

	$(document).on("click", ".myAPITrigger", function(){
			var exampleValue = $('.exampleValue').val();
			myAPI.APIRequestSample(exampleValue);
	});	
	
});