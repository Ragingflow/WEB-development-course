<?php

$servername = "127.0.0.1";
$username = "root";
$password = "";

if (!empty($_POST)) {
    $name = trim($_POST['name']);
    $secondName = trim($_POST['secondName']);
    $email = trim($_POST['email']);
    $ticket = trim($_POST['spam']);
};

// array for error message
$containerError = [];
// array for success message
$containerMessage = [];

// Create connection
$connect = mysqli_connect($servername, $username, $password) or die('Error');


// Create database
$sql = "CREATE DATABASE IF NOT EXISTS registrationDB";
$createDB = mysqli_query($connect, $sql);

mysqli_close($connect);

// sql to create table
$sqlTable = 'CREATE TABLE IF NOT EXISTS USER (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
ticket VARCHAR(50),
reg_date TIMESTAMP
)';

$dbname = "registrationDB";

$link = mysqli_connect($servername, $username, $password, $dbname) or die('Error');

// Create table
$createTable = mysqli_query($link, $sqlTable);

//query for insert data
$insertData = "INSERT INTO `registrationDB`.`USER`
(`id`, `firstname`, `lastname`, `email`, `ticket`, `reg_date`)
VALUES (NULL, '$name', '$secondName','$email','$ticket', CURRENT_TIMESTAMP)";

//query for validate email
$validEmail = "SELECT `email` FROM `USER` WHERE `email` LIKE '$email'";


if (!empty($name) && !empty($secondName) && !empty($email) && !empty($ticket)) {

    $result = mysqli_query($link, $validEmail);
    $row = mysqli_fetch_array($result, MYSQLI_NUM);
    if ($row == 0) {
        mysqli_query($link, $insertData);
        $containerMessage['successMessage'] = 'Well done!';
    } else {
        $containerError['errorMessage'] = 'Email exists';
    }


};

mysqli_close($link);


if (empty($containerError)) {
    echo json_encode(array('result' => 'success'));
} else {
    echo json_encode(array('result' => 'error'));
};

?>