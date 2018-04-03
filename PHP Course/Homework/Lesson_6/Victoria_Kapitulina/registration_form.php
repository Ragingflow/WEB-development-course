<?php 
require_once('connectvars.php');

//variable for the server side response
	$response = [];
	$response['success'] = false;
	$response['msg'] = "Invalid parameters";
	
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
		$response['errors'] = validate($userData, $validate);
		$response['success'] = empty($response['errors']);
	}

//if response don't have any email's errors then
//create new registration form, if it doesn't exist 
	if(!$response['errors']){

	// connect to the database
	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PW, DB_NAME);

	// check if email isn't already registered
	$query = "SELECT * FROM registration_ticket WHERE email = '$userEmail'";
	$data = mysqli_query($dbc, $query);
	if (mysqli_num_rows($data) == 0) {
		// the email is unique, so insert the data into the database
		$query = "INSERT INTO registration_ticket VALUES (0, '$userName', '$userLastName', '$userEmail', '$userTicket', NOW())";
		mysqli_query($dbc, $query);
		mysqli_close($dbc);
	} else {
		// the user already exists for this email, so display an error message
		$response['errors']['email'] = 'This Email has already been used, please enter a different email';
	}
		}

//if the response doesn't have any errors then the response is success and the user is finished the order
	if(!empty($response['errors'])) {
		$response['success'] = false;
	} else {
		$response['success'] = true;
		$response['msg'] = 'Congratulations, you have successfully completed the order of the ' . $userTicket . ' ticket';
	}
	die(json_encode($response));

//function for validate the array of data by validation rules		
	function validate($data, $validation) {
		$error = [];

		foreach ($validation as $key => $value) {
			
			$valid = isset($data[$key]);
			// check if this data value is set = valid
			if ($valid) {
				// if it's valid, then base on type, check what kind of validation it's required
				if (isset($value['type'])) {
					$function = "validate_{$value['type']}";
					// find the function with equal name of the type validation
					if (function_exists($function)) {
						// call the function for that type
						$valid = $function($data[$key], $value);
					}
				}
			}
			if (!$valid) {
				// the data isn't sets, so display an error for each value
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