<?php

spl_autoload_register(function($class) {
    $path = "./classes/$class.php";
    if (file_exists($path)) {
        include_once $path;
    } else {
        die("Error!");
    }
});

define("DB", ["host" => "localhost",
    "user" => "root",
    "password" => "root",
    "name" => "conference"
]);

// Where to record data about visitors? 
// To select a text file, database or xml, 
// pass the corresponding value in variable $ way ("txt"|"db"|"xml")
// By default, a text file is selected.";

$way = "xml"; // "txt" || "db"