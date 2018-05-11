<?php

# Шаблон проектирования MVC

//View - Шаблон представления
//Model - Часть кода, которая работает с базой данный или с запросами к сервисам
//Controller - Часть кода, которая занимается обработкой запросов


// Пример на процедурном интерфейсе

?>

<html>
<head>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
<?php
session_start();
if (!isset($_SESSION['username'])) {
    echo "Вы не авторизованы на сайте";
} else {
    echo "Добро пожаловать, " . $_SESSION['username'];
}
$pdo = new PDO('sqlite:site.db');
$stmt = $pdo->prepare("SELECT * FROM products");
$stmt->execute();
$dbresult = $stmt->fetchAll(PDO::FETCH_ASSOC);
foreach ($dbresult as $record) {
    foreach ($record as $k => $v) {
        echo $k . ": " . $v . "<br>";
    }
}
?>
</body>
</html>
