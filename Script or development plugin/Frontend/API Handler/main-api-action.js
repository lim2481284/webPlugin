$(document).ready(function () {

	$(document).on("click", ".profileDefaultImage", function(){
			var profileHiddenImage = $('.profileHiddenImage').val();
			tutorAPI.Change_Default_Image(profileHiddenImage);
	});	
	
    
	$(document).on("click", ".profileChangePassword", function(){
			var originalPass = prompt("Please insert your current password");
			var newPass = prompt("Please insert your new password");
			tutorAPI.Change_Password_API(originalPass,newPass);
	});	
	
	// Register API action 
    $(document).on("click", "#register-button", function(){
		var registerUser = $('#register-username').val();
		var registerEmail = $('#register-email').val();
		var registerRole = $('#register-role').val();
		var registerPassword = $('#register-password').val();
		var registerConfirmPassword = $('#register-confirmpassword').val();
		var registerFirstname = $('#register-firstname').val();
		var registerLastname = $('#register-lastname').val();
		var registerGender = $('#register-gender').val();
		if(registerPassword != registerConfirmPassword)
		{
			alert("Password are not same as confirm password");
		}
		else 
		{
			tutorAPI.Register_API(registerUser,registerPassword,registerGender,registerFirstname,registerLastname,registerEmail,registerRole);
		}
			
    });
	
	// Update profile API action 
    $(document).on("click", ".update-header", function(e){		
		e.preventDefault();
		var profileFirstName = $('#profileFirstName').val();
		var profileLastName = $('#profileLastName').val();		
		var profileGender = $('#profileGender').val();			
		var profileAddress = $('#profileAddress').val();			
		var profileStreet = $('#profileStreet').val();		
		var profileCity = $('#profileCity').val();		
		var profileState = $('#profileState').val();		
		var profilePostcode = $('#profilePostcode').val();		
		var profilePhone = $('#profilePhone').val();		
		var profileCourse = $('#profileCourse').val();		
		var profileLevel = $('#profileLevel').val();		
		var profileDescription = $('#profileDescription').val();				
		var profileEmail = $('#profileEmail').val();	
		var profileHiddenEmail = $('#profileHiddenEmail').val();
		var profileHiddenImage = $('.profileHiddenImage').val();
		var profilePass = prompt("Please insert your password to update your profile info");
		
		var profile = Cookies.get('tf_profile');		
		if(profile==null||profile=="null")
		{	
			tutorAPI.Setup_Profile_API(profileAddress,profileStreet,profileCity,profileState,profilePostcode,profilePhone,profileCourse,profileLevel,profileDescription);
			//tutorAPI.Update_Profile_API(profileGender, profileFirstName,profileLastName,profileEmail,profilePass);
		}
		else
		{	
			tutorAPI.updateProfileImage(profileHiddenImage);
			if(profileEmail==profileHiddenEmail)
			{
				tutorAPI.Update_Profile_API_Without_Email(profileGender, profileFirstName,profileLastName,profilePass,profileAddress,profileStreet,profileCity,profileState,profilePostcode,profilePhone,profileCourse,profileLevel,profileDescription);				
			}
			else 
			{
				tutorAPI.Update_Profile_API(profileGender, profileFirstName,profileLastName,profileEmail,profilePass,profileAddress,profileStreet,profileCity,profileState,profilePostcode,profilePhone,profileCourse,profileLevel,profileDescription);
			}
			
		}
		return false 
    });
		
	
	// Login API action 
    $(document).on("click", "#login-button", function(){
		var loginUser = $('#login-username').val();
		var loginPassword = $('#login-password').val();		
		tutorAPI.Authenticate_API(loginUser,loginPassword);				
    });
	
	// Logout API action 
	$('#header').on('click', '#logout', function() {	
		tutorAPI.Logout();
		cleanCookies();
		window.location= document.location.origin;
		//window.location.href =  document.location.origin;			
    });		
	
});