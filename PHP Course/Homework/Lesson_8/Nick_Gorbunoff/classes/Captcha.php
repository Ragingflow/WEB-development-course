<?php

	class Captcha {
		
		function captcha_check(){

			session_start();

			if($_POST['captcha'] != $_SESSION['rand_code']){

			echo "Проверочный код введен неверно <br>";

			exit();

			} else {

				unset ( $_SESSION ['rand_code'] );
				
			}
		}
	}