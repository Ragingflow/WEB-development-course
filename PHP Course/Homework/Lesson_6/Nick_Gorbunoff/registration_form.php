<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Регистрация</title>
</head>
<body>

	<style>
		* {
			font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
			box-sizing: border-box;
		}
		#modal{
			display: flex;
			justify-content: center;
		}
		#modal_form {
			width: 550px;
			height: 550px;
			border: 3px #000 solid;
			border-radius: 50px;
			display: flex;
			padding: 10px 10px;
			flex-direction: column;
			text-align: center;
		}
		#form {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		#form p {
			font-size: 1.2rem;
		}
		#radio-btn {
			display: flex;
			margin-bottom: 20px;
		}
		#send {
			font-size: 1.2rem;
			color: white;
			width: 160px;
			height: 50px;
			background-color: #2FCF7F;
			border-radius: 25px;
			border: none;
			cursor: pointer;
		}
		.user_data {
			font-size: 1rem;
			margin-bottom: 10px;
			padding: 5px;
			width: 250px;
			border-radius: 5px;
		}
		.messages{
			font-weight: bold;
		}
		
	</style>

	<?php

		$name = "";
		$lastname = "";
		$email = "";
		$ticket = "";
		$successMessage = "";
		$errorMessage = "";

		$servername = "localhost";
		$username = "root";
		$password = "root";

		$conn = mysqli_connect($servername, $username, $password);

		if (!$conn) {
		    die("Connection failed: " . mysqli_connect_error());
		}

		$createDB = mysqli_query($conn, "CREATE DATABASE IF NOT EXISTS reg_form_db");

		$connDB = mysqli_select_db($conn, "reg_form_db");

		$table = "CREATE TABLE visitors_tickets (
			id INT(6) NOT NULL AUTO_INCREMENT, 
			name VARCHAR(30) NOT NULL DEFAULT '',
			lastname VARCHAR(30) NOT NULL DEFAULT '',
			email VARCHAR(50) NOT NULL DEFAULT '',
			ticket_type VARCHAR(15),
			reg_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (id)
		)";

		$createTable = mysqli_query($conn, $table);

		function clean($value = "") {
			$value = trim($value);
			$value = stripslashes($value);
			$value = strip_tags($value);
			$value = htmlspecialchars($value);
			return $value;
		}

		function check_length($value = "", $min, $max) {
		    $result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
		    return !$result;
		}

		if (($_POST) == true) {

			$name = clean($_POST["name"]);
			$lastname = clean($_POST["lastname"]);
			$email = clean($_POST["email"]);
			$ticket = clean($_POST["ticket"]);

			$email_validate = filter_var($email, FILTER_VALIDATE_EMAIL);

			if(!empty($name) && !empty($lastname) && !empty($ticket)) {

			    if(check_length($name, 2, 30) && check_length($lastname, 2, 30) && $email_validate) {

			    	$checkEmail = mysqli_fetch_array(mysqli_query($conn, "SELECT * FROM visitors_tickets WHERE email = '$email'"), MYSQLI_NUM);

			    	if (!empty($checkEmail)) {
			    		echo $errorMessage = "Этот email уже зарегистрирован!";
			    		exit();
			    	}else{
			    		mysqli_query($conn, "INSERT INTO visitors_tickets (name, lastname, email, ticket_type)
											VALUES ('$name', '$lastname', '$email', '$ticket')");

			    		echo $successMessage = "Вы успешно зарегистрированы!";
			    		exit();
			    	}

				} else {
			        echo $errorMessage = "Введенные данные некорректные";
			        exit();
			    }

			} else {
				    echo $errorMessage = "Заполните пустые поля";
				    exit();
			}
		}

		mysqli_close($conn);
	?>

	<div id="modal">
		<div id="modal_form">
			<h1>Регистрация</h1>
			<form id="form">
				<p>Выберите тип билета:</p>
				<div id="radio-btn">
					<input type="radio" name="ticket" value="Free" checked>Free<br>
					<input type="radio" name="ticket" value="Standart">Standart<br>
					<input type="radio" name="ticket" value="Premium">Premium<br>
				</div>
				<input class="user_data" type="text" name="name" placeholder="Имя" /><br>
				<input class="user_data" type="text" name="lastname" placeholder="Фамилия"/><br>
				<input class="user_data" type="email" name="email" placeholder="Email"/><br>
				<input type="submit" name="submit" id="send" value="Отправить"/>
				<p class="messages"></p>
			</form>
		</div>
	</div>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>

	<script>
		$(document).ready(function () {
			$('#form').validate({
				rules: {
					name: {
						required:true,
						minlength: 2
					},
					lastname: {
						required:true,
						minlength: 2
					},
					email: {
						required:true,
						email:true
					}
				},
				messages: {
					name: {
						required:"Введите Ваше Имя",
						minlength: "Используйте не менее двух символов"
					},
					lastname: {
						required:"Введите Вашу Фамилию",
						minlength: "Используйте не менее двух символов"
					},
					email: {
						required:"Введите Ваш email",
						email:"Используйте правильный формат email"
					}
				},
				submitHandler: function(){
					$.ajax({
						type: "POST",
						url: "registration_form.php",
						data: $('#form').serialize(),
						success: function(data) {
							$('.messages').html(data);
							$('.user_data').val('');
						}
					})
				}
			});
		});
	</script>

</body>
</html>