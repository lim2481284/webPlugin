$(document).ready(function () {

	/**
		API request response handler
	**/
		
    $(document).off('APIRequestSample_response').on('APIRequestSample_response', function (e, data, status) {		        
            console.log(data);  
    });


});