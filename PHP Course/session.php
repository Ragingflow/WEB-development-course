<?php

// Сессии


//Начало или продолжение сессии
session_start();

// 9de42b38407b51b41943d1310e44bc69

// $_SESSION['user'] = "John";

print_r($_SESSION);

unset($_SESSION['user']);


// удаление сессии
//session_destroy();

// id сессии
// session_id();

// Имя сессии
// session_name();


// Изменить время жизни сессии можно в настройках php.ini или установить из PHP с помощью команды
// ini_set()





?>