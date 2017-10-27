

/**
	AJAX declaration and configuration 
	Your can make your own AJAX function configuration here 
**/


$.postAjax = (url, data, successcallback, errcallback) => {
	$.ajax({
		async: true,
		success:successcallback,
		error:errcallback,
		url:url,
		data:JSON.stringify(data),		
		type:"POST",
		contentType:"application/json; charset=utf-8",
		accepts:"json"
	});
}

$.postPlainAjax = (url, data, successcallback, errcallback) => {
	$.ajax({
		async: true,
		success:successcallback,
		error:errcallback,
		proccessData:false,
		url:url,
		data:data,		
		type:"POST",
		contentType:"text/plain",
		accepts:"json"
	});
}

$.putAjax = (url, data, successcallback, errcallback) => {
	$.ajax({
		async:true,
		success:successcallback,
		error:errcallback,
		url:url,
		type: "PUT",
		crossDomain: true,
		data:JSON.stringify(data),
		method:"PUT",
		processData:true,
		contentType:"application/json",
		accepts:"json"
	});
}

$.deleteAjax = (url, data, successcallback, errcallback) => {
    $.ajax({
        async: true,
        success: successcallback,
        error: errcallback,
        url: url,
        crossDomain: true,
        data: JSON.stringify(data),
        method: "DELETE",
        processData: true,
        contentType: "application/json",
        accepts: "json"
    });
}


$.getAjax = (url, successcallback, errcallback) => {
	$.ajax({
		async:true,
		success:successcallback,
		error:errcallback,
		url:url,
		crossDomain: true,		
		method:"GET",
		processData:true,
		contentType:"application/json",
		accepts:"json"
	});
}