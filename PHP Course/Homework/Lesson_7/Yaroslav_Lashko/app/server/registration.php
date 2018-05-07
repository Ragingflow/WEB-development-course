<?php

session_start();

if($_POST["captcha"] != $_SESSION["captcha"] ){
    die ("Captcha incorrect");
}

session_destroy();

include_once "config.php";

$validator = new Validator();
$visitor = $validator->validate();

if ($visitor) {

    $error = "Such email already exists or a write error has occurred";

    switch ($way) {
        case "txt":
            $conference = new TextFileManager($visitor);
            break;
        case "db":
            $conference = new DbManager(DB, $visitor);
            break;
        case "xml":
            $conference = new XMLFileManager($visitor);
            break;
    }

    if ($conference->addNewVisitor()) {
        echo "success";
    } else {
        echo $error;
    }
    
} else {
    echo 'The data is incorrect';
}