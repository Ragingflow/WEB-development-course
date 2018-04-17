<?php



spl_autoload_register(function ($class) {
    include 'classes/' . $class . '.php';
});


// select a method to save data
// file or dataBase or xml



$addData = new Adapter();
$addData->saveData('xml');





