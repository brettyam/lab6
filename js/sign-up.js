//signup.js 
// add your JavaScript code to this file

$(function(){
	var option;
	var idx;
	var state;
	var stateSelect = $('.us-states');

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
		
		if (addr1Value.length > 0) {
			var zipInput = signupForm.find('input[name="zip"]');
			var zipValue = zipInput.val();

			if (zipValue.length == 0 || zipValue.length == null) {
				alert("Please include a zipcode with your address.");
				return false;
			}
		}
		var reqField;       
	    var reqValue;       

	    reqField = signupForm.find('input[name="first-name"]');
	    reqValue = reqField.val().trim();
	    if (0 === reqValue.length) {
	        //field has no value
	        alert('You must enter a first name!');
	        return false;
	    }
                    
	});

	$('.cancel-signup').click(function(){
		 $('.cancel-signup-modal').modal();
	});

	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});

	$('select[name="refer"]').change(function(){
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    if ('other' === referSelect.val().toLowerCase()) {
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    }
	    else {

	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	});
});