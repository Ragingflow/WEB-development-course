<?php

	class SaveToXML {

		public function xml_save($userData) {

			$name = $_POST["name"];
			$lastname = $_POST["lastname"];
			$email = $_POST["email"];
			$ticket = $_POST["ticket"];

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