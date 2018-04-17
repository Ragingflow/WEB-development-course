<?php

	class SaveToDB {

		public function db_save($userData) {

			$name = $_POST["name"];
			$lastname = $_POST["lastname"];
			$email = $_POST["email"];
			$ticket = $_POST["ticket"];

			$conn = mysqli_connect(DB_HOST, DB_USER, DB_PW);

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