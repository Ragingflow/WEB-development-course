<?php

	class Valid {

		private function clean($value = "") {
			$value = trim($value);
			$value = stripslashes($value);
			$value = strip_tags($value);
			$value = htmlspecialchars($value);
			return $value;
		}

		private function check_length($value = "", $min, $max) {
			$result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
			return !$result;
		}

		public function config_valid($userData) {

			if (($userData) == true) {

				$name = $this->clean($_POST["name"]);
				$lastname = $this->clean($_POST["lastname"]);
				$email = $this->clean($_POST["email"]);
				$ticket = $this->clean($_POST["ticket"]);

				$email_validate = filter_var($email, FILTER_VALIDATE_EMAIL);

				if(!empty($name) && !empty($lastname) && !empty($ticket)) {

					if($this->check_length($name, 2, 15) && $this->check_length($lastname, 2, 20) && $email_validate) {

						return true;
						
					} else {
						echo $errorMessage = "Введенные данные некорректные";
						exit();
					}

				} else {
						echo $errorMessage = "Заполните пустые поля";
						exit();
				}
			}
		}
	}