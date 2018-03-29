<?php 

$time = date("d_m_Y");

if (!empty($_POST)) {
	$name = trim($_POST['name']);
	$secondName = trim($_POST['secondName']);
	$email = trim($_POST['email']);
	$ticket = trim($_POST['spam']);
};



if (!empty($name) && !empty($secondName) && !empty($email) && !empty($ticket)){
	$userData = fopen('registration_'.$time.'.txt', 'a+');
	if (strpos(file_get_contents('registration_'.$time.'.txt'), $email)){                 
		echo "Email exists";
		exit();
	} else {
		$user = "Name: " .$name. " " ."Second Name: " .$secondName ." " . "Email: " .$email ." " . "Ticket: " .$ticket ."<br>\n";
		fwrite($userData, $user);
		fclose($userData);
		readfile('registration_'.$time.'.txt');
		exit();
	};
};

?>

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<!-- JQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>


<script>

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
            		data: $("#registration").serialize(),
            		success: function(data) {
            			$("#information").html(data);
            			$(".info").val('');
            		}
            	});
             } // end submitHandler
    }); // end validate()    

}); // document ready end

</script>

<div class="container col-lg-6">

	<form id="registration">
		<div class="form-group">
			<label for="inputName">Name</label>
			<input type="text" class="form-control info" id="inputName" name="name" placeholder="Enter Name">
		</div>

		<div class="form-group">
			<label for="inputSecondName">Second Name</label>
			<input type="text" class="form-control info" id="inputSecondName" name="secondName"placeholder="Enter Second Name">
		</div>

		<div class="form-group">
			<label for="inputEmail">Email address</label>
			<input type="email" class="form-control info " id="inputEmail" name="email" placeholder="Enter email">
		</div>

		<label id="spam-error" class="error" for="spam"></label>

		<div class="form-check">
			<input type="checkbox" class="form-check-input" id="checkFree" value="free" name="spam">
			<label class="form-check-label" for="checkFree">Free</label>
		</div>


		<div class="form-check">
			<input type="checkbox" class="form-check-input" id="checkStandart" value="standart" name="spam">
			<label class="form-check-label" for="checkStandart">Standart</label>
		</div>


		<div class="form-check">
			<input type="checkbox" class="form-check-input" id="checkPremium" value="premium" name="spam">
			<label class="form-check-label" for="checkPremium">Premium</label>
		</div>


		<button type="submit" class="btn btn-primary" id="submitForm">Submit</button>
	</form>

	<div id="information" >	</div>
</div>
