<?php

include_once "config.php";

$validator = new Validator();
$visitor = $validator->validate();

if ($visitor) {

    $error = "Such email already exists or a write error has occurred";
    include_once $addVisitorsWay;
    
} else {
    echo 'The data is incorrect';
}