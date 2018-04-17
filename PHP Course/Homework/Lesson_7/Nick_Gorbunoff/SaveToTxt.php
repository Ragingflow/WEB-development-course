<?php
	class SaveToTxt {

		public function text_save($userData) {

			$name = $_POST["name"];
			$lastname = $_POST["lastname"];
			$email = $_POST["email"];
			$ticket = $_POST["ticket"];

			$currentDate = date("d_m_Y");

			$baseFile = fopen("registration_$currentDate.txt", "a+");

			if (strpos(file_get_contents("registration_$currentDate.txt"), $email)){
				echo $errorMessage = "Этот email уже зарегистрирован!";
				exit();
			} else {
				fwrite($baseFile, $name.' '.$lastname.' '.$email.' '.$ticket.'; ');
				echo $successMessage = "Вы успешно зарегистрированы!";
				exit();
			}
			fclose($baseFile);
		}
	}