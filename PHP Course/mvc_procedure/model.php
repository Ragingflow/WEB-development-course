<?php
function getDBConnection() {
    try{
        $pdo = new PDO('sqlite:site.db');
        return $pdo;
    }catch(PDOException $e) {
        return "Извините, " . $e->getMessage());
 }
}
function fetchAllProducts() {
    $pdo = getDBConnection();
    if(!is_object($pdo))
        return $pdo;
    try{
        $stmt = $pdo->prepare("SELECT * FROM products");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }catch(Exception $e) {
        return "Извините, " . $e->getMessage()); }
}