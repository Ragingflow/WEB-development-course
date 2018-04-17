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
// pass the corresponding parameter ("txt"|"db"|"xml")
// to the function selectAddVisitors($way) 
// By default, a text file is selected.";

$addVisitorsWay = selectAddVisitors("txt");

function selectAddVisitors($way) {
    switch ($way) {
        case "txt":
            $addVisitorsWay = "./addVisitorsWays/addToTxt.php";
            break;
        case "db":
            $addVisitorsWay = "./addVisitorsWays/addToDb.php";
            break;
        case "xml":
            $addVisitorsWay = "./addVisitorsWays/addToXml.php";
            break;
    }
    return $addVisitorsWay;
}
