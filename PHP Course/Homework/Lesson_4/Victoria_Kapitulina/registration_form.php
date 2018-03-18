<?php 

//variable for the server side response
	$response = new stdClass;
	$response->success = false;
	$response->msg = "Invalid parameters";
	
//variables of user data
	$userData = $_POST;
	$userName = $userData['name'];
	$userLastName = $userData['lastName'];
	$userEmail = $userData['email'];
	$userTicket = $userData['ticketType'];

//check if the user data exists 
	if($userData && is_array($userData)){
		//rules for validation
		$validate = [
			'name' => [
				'msg' => 'Invalid name format! The name can contain letters only. The minimum length of your first name must be 3 characters.', 
				'type' => 'regex',
				'pattern' => '/^[a-zA-Z\-]{3,}$/'],
			'lastName' => [
				'msg' => 'Invalid name format! The name can contain letters only. The minimum length of your last name must be 3 characters.', 
				'type' => 'regex',
				'pattern' => '/^[a-zA-Z\-]{3,}$/'],
			'email' => [
				'msg' => 'Please enter a valid email address.', 
				'type' => 'email'],
			'ticketType' => ['msg' => 'Please choose a ticket type.']
			];
		//Validate the user data
		$response->errors = validate($userData, $validate);
		$response->success = empty($response->errors);
	}

//if response don't have any email's errors then
//add one more order registration in the file or create new registration file, if it doesn't exist 
	if(!$response->errors){
		$registrationFile = "registration_" . date('d_m_Y') .".txt";
		$handleRegFile = fopen($registrationFile, 'a+') or die ('Cant open file');
		//check if email is already has in the file
		if(!strpos(file_get_contents($registrationFile), $userEmail)){
			$newRegistration = "$userName " . "$userLastName ". "$userEmail ". "$userTicket \n\r";
			fwrite($handleRegFile, $newRegistration);
			fclose($handleRegFile);
		} else {
			$response->errors['email'] = 'This Email has already been used, please enter a different email';
			}
		}

//if the response doesn't have any errors then the response is success and the user is finished the order
	if(!empty($response->errors)) {
		$response->success = false;
	} else {
		$response->success = true;
		$response->msg = 'Congratulations, you have successfully completed the order of the ' . $userTicket . ' ticket';
	}
	die(json_encode($response));

//function for validate the array of data by validation rules		
	function validate($data, $validation) {
		$error = [];

		foreach ($validation as $key => $value) {
			$valid = isset($data[$key]);
			if ($valid) {
				if (isset($value['type'])) {
					$function = "validate_{$value['type']}";
					if (function_exists($function)) {
						$valid = $function($data[$key], $value);
					}
				}
			}
			if (!$valid) {
				$error[$key] = isset($value['msg']) ? $value['msg'] : 'Please enter a value';
			}
		}
		return $error;
	}

//validate some data in array by pattern
	function validate_regex($item, $value) {
		$pattern = isset($value['pattern']) ? $value['pattern'] : '/.*/';
		return preg_match($pattern, $item);
	}

//validate emaail
	function validate_email($item, $value) {
		return filter_var($item, FILTER_VALIDATE_EMAIL) !== false;
	}
		
?>