<?php

$host = $_SERVER['HTTP_HOST'];
$dir = dirname(__FILE__);

include_once( $dir. '/validator/index.php' );

if($_SERVER['REQUEST_METHOD'] === 'POST' ){}


if(isset($_POST)){
    $input = $_POST;
}else {
    $body = file_get_contents('php://input');
    $input = array();
    parse_str($body, $input);
}


$response = array();
$response['errors'] = array();


$fields = array(
    'fields' => $input,
    'required' => array(
        'email',
        'firstname',
        'lastname',
        'type',
    )
);


$response['errors'] = Validator::validate_fields( $fields, $response['errors'] );

header('Content-type: application/json');
echo json_encode($response);


