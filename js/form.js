function validateform(){ 

	var letters   = /^[A-Za-z]+$/;
	var emailfilt = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var numfilter = /^[0-9]+$/;
	var name 	  = document.myform.name.value;  
	var password  = document.myform.password.value;  
	var email 	  = document.myform.emailadress.value;
	var telnum    = document.myform.telephonenumber.value;
	var bdate 	  = document.myform.bdate.value;	
  
	if (name==null || name==""){  
  		
  		alert("Name can't be blank");  
  		return false;  
	}

	else if (!name.match(letters)) {
		alert("Name can't contain numbers and special characters");
		return false;
	}
	else if(password.length < 8 || password.length > 16){  
  		
  		alert("Password must be at least 8 and at most 16 characters long.");  
  		return false;  
  	}  

  	else if (password.search(/[a-z]/) < 0) {

  		alert("Your password needs a lower case letter");
		return false;  
	} 
	else if(password.search(/[A-Z]/) < 0) {

  		alert("Your password needs an upper case letter");
  		return false;  
	} 

	else if (password.search(/[0-9]/) < 0) {

  		alert("Your password needs a number");
  		return false;
	}

	else if (password.search(/[!@#\$%\^&\*]/) < 0) {

		alert("Your password needs a special character");
		return false;
	}

	else if (!email.match(emailfilt)) {
		alert("Not a valid email address");
		return false;
	}

	else if (telnum.length < 11 || telnum.length > 11) {
		alert("Your telephone number must have exactly 11 digit");
		return false;
	}

	else if (!telnum.match(numfilter)) {
		alert("Your telephone number must have only digits");
		return false;
	}
	else if(bdate < 1900 || bdate >2020){
		alert("Invalid birth year. Valid years 1900-2020. ");
		return false;
	}

}  
   