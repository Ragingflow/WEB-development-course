<?php

class AddToDB
{

    public function dataBase($name, $secondName, $email, $ticket)
    {

        spl_autoload_register(function ($class) {
            include $class . '.php';
        });

        $error = new Response();


        $servername = "127.0.0.1";
        $username = "root";
        $password = "";
        $dbname = "registrationDB";

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
            } else {
                $error->containerError = 'Email exists';
            }


        };

        mysqli_close($link);


        $error->testError();
    }

}