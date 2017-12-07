function validate() {
	
	if(document.reg_form.first_name.value == ""){
		alert("Input cannot be blank");
		return false;
	}

	if(document.reg_form.last_name.value == ""){
		alert("Input cannot be blank");
		return false;
	}
	
	if(document.reg_form.address.value == ""){
		alert("Input cannot be blank");
		return false;
	}
	
	if(document.reg_form.subject.value == ""){
		alert("Input cannot be blank");
		return false;
	}
	
	alert("Thank You");
	return true;
}