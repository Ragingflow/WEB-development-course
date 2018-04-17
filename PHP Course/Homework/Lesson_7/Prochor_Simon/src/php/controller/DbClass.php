<?php


class DbClass {
    use kult_trait;

    public $errors = null;

    private $error = array();
    public $mysqli;

    function __construct(){
        $this->connectHost();
        //$this->connectDb();
    }

    private function connectHost() {
        $this->mysqli = new mysqli( DB_HOSTNAME, DB_USERNAME, DB_PASSWORD );

        if( !empty($this->mysqli->connect_error) ) {
            $this->errors =  $this->mysqli->connect_error;
        }
    }

    public function connectDb() {
        $this->mysqli->select_db( DB_DATABASE );
        if( !empty($this->mysqli->error) ) {
            $this->createDb();
        }
        $this->mysqli->query("SELECT DATABASE()");
    }

    private function createDb() {
        $sql = "CREATE DATABASE " . DB_DATABASE;
        $this->mysqli->query($sql);

        if( !empty($this->mysqli->error) ) {
            die( $this->mysqli->error );
        }
        $this->connectDb();
        $this->fillDb();
    }

    private function fillDb() {
        $sql = "CREATE TABLE orders (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            user INT,
            type INT,
            date TIMESTAMP
            );";

        $this->mysqli->query($sql);

        $sql = "CREATE TABLE users (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            firstname VARCHAR(30) NOT NULL,
            lastname VARCHAR(30) NOT NULL,
            email VARCHAR(50)
            );";


        $this->mysqli->query($sql);
    }


}