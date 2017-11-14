$(document).ready(function () {

	/**
		API request response handler
	**/
		
    $(document).off('APIRequestSample_response').on('APIRequestSample_response', function (e, data, status) {		        
            console.log(data);  
    });


	/**
		Example of handle JSON loop
	**/	
    $(document).off('APIRequestSample_response').on('APIRequestSample_response', function (e, data, status) {		        
		var loopingData = data.myData;		
		$.each( loopingData, function(index) {
			console.log(loopingData[index]);
			console.log(loopingData[index].name);
		});
    });
	


});