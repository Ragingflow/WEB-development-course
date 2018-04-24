<?php
	
	require_once('configDB.php');

	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.php';
	});

	$userData = $_POST;

	$validate = new Valid();
	$validate->config_valid($userData); 

	$captchaCheck = new Captcha();
	$captchaCheck->captcha_check(); 

	// To select the save path, change the value in the config_reg(''), 
	// text, db, xml

	$regVisitor = new Config();
	$regVisitor->config_reg('xml');
	
?>