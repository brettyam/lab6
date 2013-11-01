//signup.js 
// add your JavaScript code to this file

//document on ready
$(function(){
	var option;
	var idx;
	var state;
	var stateSelect = $('.us-states');

	//loop through usStates, add each state to menu
	$.each(usStates, function(){
		option = $(document.createElement('option'));
		option.attr('value', this.abbreviation);
		option.html(this.name);
		stateSelect.append(option);
	});

	$('.signup-form').submit(function(){
		var signupForm = $(this);
    	var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addr1Input.val();
		
		//test if any input is given for address
		if (addr1Value.length > 0) {
			var zipInput = signupForm.find('input[name="zip"]');
			var zipValue = zipInput.val();

			//if input for address exists, input for zipcode must also exist
			if (zipValue.length == 0 || zipValue.length == null) {
				alert("Please include a zipcode with your address.");
				return false;
			}
		}
		var reqField;	//reference to a required field  
	    var reqValue;	//the required field's value

	    reqField = signupForm.find('input[name="first-name"]');
	    reqValue = reqField.val().trim();
	    if (0 === reqValue.length) {
	        //field has no value
	        alert('You must enter a first name!');
	        return false;
	    }              
	}); //signup form submission function

	$('.cancel-signup').click(function(){
		 $('.cancel-signup-modal').modal();
	});

	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});

	$('select[name="refer"]').change(function(){
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

		//if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	    	//remove the disabled attribute from the
        	//refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    } else {
	    	//otherwise, make the refer-other input disabled
        	//and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	}); //refer change function
}); //document on ready