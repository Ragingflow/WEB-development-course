<?php

	class Config {

		private $name = "";
		private $lastname = "";
		private $email = "";
		private $ticket = "";
		private $successMessage = "";
		private $errorMessage = "";
	
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

		public function config_reg($selectSaveWay) {

			if (($_POST) == true) {

				$name = $this->clean($_POST["name"]);
				$lastname = $this->clean($_POST["lastname"]);
				$email = $this->clean($_POST["email"]);
				$ticket = $this->clean($_POST["ticket"]);

				$email_validate = filter_var($email, FILTER_VALIDATE_EMAIL);

				if(!empty($name) && !empty($lastname) && !empty($ticket)) {

					if($this->check_length($name, 2, 15) && $this->check_length($lastname, 2, 20) && $email_validate) {

						switch($selectSaveWay) {

							case 'text':
							$txt = new SaveToTxt();
							$txt->text_save($name, $lastname, $email, $ticket);
							break;

							case 'db':
							$db = new SaveToDB();
							$db->db_save($name, $lastname, $email, $ticket);
							break;

							case 'xml':
							$xml = new SaveToXML();
							$xml->xml_save($name, $lastname, $email, $ticket);
							break;

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
		}
	}

	class SaveToTxt {

		public function text_save($name, $lastname, $email, $ticket) {

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

	class SaveToDB {

		public function db_save($name, $lastname, $email, $ticket) {

			$servername = "localhost";
			$username = "root";
			$password = "";

			$conn = mysqli_connect($servername, $username, $password);

			if (!$conn) {
				die("Connection failed: " . mysqli_connect_error());
			}

			$createDB = mysqli_query($conn, "CREATE DATABASE IF NOT EXISTS reg_form_db");

			$connDB = mysqli_select_db($conn, "reg_form_db");

			$table = "CREATE TABLE IF NOT EXISTS visitors_tickets (
				id INT(6) NOT NULL AUTO_INCREMENT, 
				name VARCHAR(30) NOT NULL DEFAULT '',
				lastname VARCHAR(30) NOT NULL DEFAULT '',
				email VARCHAR(50) NOT NULL DEFAULT '',
				ticket_type VARCHAR(15),
				reg_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
				PRIMARY KEY (id)
			)";

			$createTable = mysqli_query($conn, $table);

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
		}
	}

	class SaveToXML {

		public function xml_save($name, $lastname, $email, $ticket) {

			$currentDate = date("d_m_Y");

			$baseFile = "registration_".$currentDate.".xml";

			$sxml = new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?>'.'<visitors></visitors>');

			if (!file_exists($baseFile)) {
				$sxml->asXML($baseFile);
			}

			if (strpos(file_get_contents($baseFile), $email)){
				echo $errorMessage = "Этот email уже зарегистрирован!";
				exit();
			} else {
				$sxml = simplexml_load_file($baseFile);
				$visitor = $sxml->addChild("visitor");
				$visitor->addChild("firstname", $name);
				$visitor->addChild("lastname", $lastname);
				$visitor->addChild("email", $email);
				$visitor->addChild("ticket", $ticket);
				$sxml->asXML($baseFile);
				echo $successMessage = "Вы успешно зарегистрированы!";
				exit();
			}
		}
	}

	// To select the save path, change the value in the config_reg(''), 
	// text, db, xml

	$regVisitor = new Config();
	$regVisitor->config_reg('xml'); 
	
?>