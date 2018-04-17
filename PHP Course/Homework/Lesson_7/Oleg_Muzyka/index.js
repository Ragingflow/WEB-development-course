$(document).ready(function(){

	$('#inputName').focus();

	$('#registration').validate({
		rules: {
			name: {
				required:true,
				minlength: 2
			},
			secondName: {
				required:true,
				minlength: 2
			},
			email: {
				required:true,
				email:true
			},
            spam: {
                required: true
            }
            }, // end of rules
            messages: {
            	name: {
            		required:"Enter your name",
            		minlength:"Use at least two characters"
            	},
            	secondName:{
            		required:"Enter your second name",
            		minlength:"Use at least two characters"
            	},
            	email: {
            		required:"Enter your email",
            		email:"Enter correct email "
            	},
                spam: {
                    required: "Check at least one."
                }
            }, // end of messages
            submitHandler: function() {
                $.ajax({
                    url: "registration_form.php",
                    type: "POST",
                    dataType: "json",
                    data: $("#registration").serialize(),
                    success: function(data) {
                        if(data.result == 'error'){  
                            $("#information").text('Email существует'); 
                        } else {
                            $("#information").text('форма корректно заполнена');
                            $(".info").val('');
                        }
                    }
                });
             } // end submitHandler
    }); // end validate()    

}); // document ready end