$(document).ready(function () {

	// Register API response 
    $(document).off('Register_response').on('Register_response', function (e, data, status) {		        
            alert(data.message);  
			if(data.success)
			{
				location.reload();
			}
    });

	// Update user profile default image API response 
    $(document).off('update_default_image_response').on('update_default_image_response', function (e, data, status) {		        
          alert("Default image uploaded");
    });

	// test API response 	
    $(document).off('test').on('test', function (e, data, status) {		        
          console.log(data);
    });
	
	// Get profile API response for student 
	$(document).off('get_profile_response').on('get_profile_response', function (e, data, status) {	
		var userId = $.cookie.get("tf_id");	
		$('#profileUsername').html(data.data.username);
		$('#profileUsername_tutor').val(data.data.username);
		$('#profileEmail').val(data.data.email);
		$('#profileHiddenEmail').val(data.data.email);
		$('#profileFirstName').val(data.data.first_name);
		$('#profileLastName').val(data.data.last_name);
		$('#profileGender').val(data.data.gender);			
		$("#profileGender").change();
		$('#profileTotalLogin').html(data.data.status.total_login);
		$('#profileLastLogin').html(data.data.status.last_login);
		$('#profileTotalViolation').html(data.data.status.violation);
		$('.profilePicture').attr('src','http://tf.1ppl.me/api/user/' + userId+'/avatar.medium.jpg');
		
		var profile = Cookies.get('tf_profile');
		if(!(profile==null||profile=="null"))
		{
			$('#profilePhone').val(data.data.profile.phone);			
			$('#profileDescription').val(data.data.profile.description);			
			$('#profileAddress').val(data.data.profile.address.address);			
			$('#profileCity').val(data.data.profile.address.city);			
			$('#profilePostcode').val(data.data.profile.address.postcode);			
			$('#profileState').val(data.data.profile.address.state);
			$("#profileState").change();		
			$('#profileTeaching').val(data.data.profile.course);		
			$("#profileTeaching").change();
			$('#profileLevel').val(data.data.profile.level);
			$("#profileLevel").change();
			$('#profileStreet').val(data.data.profile.address.street);			
		}			
		
		if(data.data.status.active)
			$('#profileStatus').html("Active");
		else 
			$('#profileStatus').html("Inactive");
		
		if(data.data.status.email_verified)
			$('#profileEmailVerified').html("Verified");
		else 
			$('#profileEmailVerified').html("Not Yet verify");

		console.log(data);
		
    });

	// Update profile API response for  
	$(document).off('update_profile_response').on('update_profile_response', function (e, data, status) {		        
		console.log(data);
		alert("Edit profile success, please login the website again");
		cleanCookies();
		window.location= document.location.origin;
    });	
	
	// Change password API response 
	$(document).off('change_password_response').on('change_password_response', function (e, data, status) {		
			alert("Password changed, please login again");
			cleanCookies();
			window.location= document.location.origin;
    });	
	
	
 	// Login API response 
    $(document).off('Authenticate_response').on('Authenticate_response', function (e, data, status) {		        
            alert(data.message);
			console.log(data);
			if(data.success)
			{				
				while (Cookies.get('tf_id')) {
					Cookies.remove('tf_id');
				}	
				while (Cookies.get('tf_role')) {
					Cookies.remove('tf_role');
				}										
				Cookies.set('tf_id', data.user_id, { expires: 999 });
				
				var userRole = $.ajax({
					url: 'http://tf.1ppl.me/api/user/'+data.user_id,
					async: false,
					dataType: 'json'
				}).responseJSON;
				userRole = userRole.data.role;				
				Cookies.set('tf_role', userRole, { expires: 999 });
				
				var userProfile = $.ajax({
					url: 'http://tf.1ppl.me/api/user/'+data.user_id +'/profile',
					async: false,
					dataType: 'json'
				}).responseJSON;
				console.log(userProfile);
				userProfile = userProfile.data;			

				while (Cookies.get('tf_profile')) {
					Cookies.remove('tf_profile');
				}						
				Cookies.set('tf_profile', userProfile, { expires: 999 ,path: '/'});		
				if(userProfile==null||userProfile=="null")
				{						
					switchUserSetup(userRole);
				}
				else 
					switchUser(userRole);

			}
    });


 	// Token verification response 
    $(document).off('Verify_success').on('Verify_success', function (e, data, status,role) {			
		// Verify role with user id 
		if(role)
		{		
			if (Cookies.get('tf_role')) {
				var userRole = Cookies.get('tf_role');
				var profile = Cookies.get('tf_profile');				
				if(userRole != role)
				{					
					if(profile==null||profile=="null")
						switchUserSetup(userRole);
					else 
						switchUser(userRole);
				}
				else 
				{
					if(profile==null||profile=="null")
							switchUserSetup(userRole);
				}
			}
			else 
			{
				cleanCookies();
				window.location= document.location.origin;
			}
		}

    });	

	// Logout response
    $(document).off('Logout_success').on('Logout_success', function (e, data, status,xhr) {	
			cleanCookies();
			window.location= document.location.origin;
    })	
	
	// Main function to clear all the cookie
	function cleanCookies()
	{
		if(Cookies.get('tf_token'))
			Cookies.remove('tf_token')
		if(Cookies.get('tf_id'))
			Cookies.get('tf_id')
		if(Cookies.get('tf_role'))
			Cookies.get('tf_role')
		while(localStorage.getItem("user"))	
		{
			localStorage.removeItem("user");
		}
	}
	
	// Main function to switch user role to setup profile
	function switchUserSetup(userRole)
	{
		if(userRole=='stu'||userRole=='par')
		{
			localStorage.setItem("user", "student");
			var parts = window.location.href.split('/');
			var lastSegment = parts.pop() || parts.pop(); 
			if(lastSegment!="profile.html")
			{
				alert("Please setup your profile page detail first before you can access to other function");
				window.location.href = "profile.html";								
			}
		}
		else if(userRole=='tut')
		{			
			localStorage.setItem("user", "tutor");
			var parts = window.location.href.split('/');
			var lastSegment = parts.pop() || parts.pop(); 
			var secondSegment = parts.pop() || parts.pop(); 			
			if(secondSegment!="db")
			{
				if(lastSegment!="")
				{
					alert("Please setup your profile page detail first before you can access to other function");
					window.location.href = "profile.html";		
				}
				else 
				{
					alert("Please setup your profile page detail first before you can access to other function");
					window.location.href = "db/profile.html";		
				}
			}
			else 
			{
				if(lastSegment!="profile.html")
				{
					alert("Please setup your profile page detail first before you can access to other function");
					window.location.href = "profile.html";		
				}
			}
		}
		else if(userRole=='adm')
		{
			if(!(localStorage.getItem("user")))
			{								
				localStorage.setItem("user", "admin");		
				window.location.href = "db-admin";	
			}
		
		}
	}
	
	// Main function to switch user role
	function switchUser(userRole)
	{
		if(userRole=='stu'||userRole=='par')
		{
			localStorage.setItem("user", "student");
			window.location= document.location.origin;
		}
		if(userRole=='tut')
		{
			localStorage.setItem("user", "tutor");
			window.location.href = "db";	
		}
		
		if(userRole=='adm')
		{
			localStorage.setItem("user", "admin");
		}
	}	

});