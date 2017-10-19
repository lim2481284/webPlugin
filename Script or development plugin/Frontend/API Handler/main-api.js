
function Api() {
	
	/**
		API request error handling 
	**/ 

    this.error = (xhr, status, err) =>{
		var error = jQuery.parseJSON(xhr.responseText);			
		console.log(xhr.responseText);
		console.log(error);
		console.log(err);		
	}
	
	
	/**
		API request handling 
	**/ 

	
    this.APIRequestSample = (data_1) => {
        var data ={
			"data_1" : data_1
		};
        $.postAjax('http://www.example.com/api', data, (data, status, xhr) => {			
            $(document).trigger("APIRequestSample_response", [data, status]);
        }, this.error);
	}
 	
}

//Global declaration for API function 
var myAPI = new Api();    

    
