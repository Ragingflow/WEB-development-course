<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Регистрация</title>

	<link rel="stylesheet" href="style.css">
</head>
<body>

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

				<img alt="" id="captcha" src="configCaptcha.php" />
				<span onclick="document.getElementById('captcha').src = 'configCaptcha.php?r=' + Math.random()">Обновить код</span>
				<input id="captchainput" type="text" autocomplete="off" name="captcha" value="" placeholder="Введите код с картинки" />

				<input type="submit" name="submit" id="send" value="Отправить"/>
				<p class="messages"></p>
			</form>
		</div>
	</div>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>

	<script src="main.js"></script>

</body>
</html>