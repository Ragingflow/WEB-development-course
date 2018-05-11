<?php
include 'model.php';
session_start();
if (isset($_SESSION['username'])) {
    $output = "Добро пожаловать, ". $_SESSION['username'];
} else {
    $output = "Вы не авторизованы не сайте";
}
$dbresult = fetchAllProducts();