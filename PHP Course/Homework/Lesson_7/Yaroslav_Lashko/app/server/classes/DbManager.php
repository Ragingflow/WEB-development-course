<?php

/**
 * Description of DbManager
 *
 * @author yaroslav
 */
class DbManager {

    public $mysql, $db_name, $visitor;

    public function __construct($db, $visitor) {
        $this->mysql = new mysqli($db["host"], $db["user"], $db["password"]);
        $this->db_name = $db["name"];
        $this->visitor = $visitor;
    }

    protected function createDb() {
        if (!$this->mysql->select_db($this->db_name)) {
            $create_db = "CREATE DATABASE conference";
            $this->mysql->query($create_db);
            $this->mysql->select_db($this->db_name);
            $create_table = "CREATE TABLE visitors (id INT NOT NULL AUTO_INCREMENT,"
                    . "name VARCHAR(30) NOT NULL,"
                    . "lastname VARCHAR(30) NOT NULL,"
                    . "email VARCHAR(50) NOT NULL,"
                    . "ticket VARCHAR (20) NOT NULL,"
                    . "date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,"
                    . "PRIMARY KEY (id))";
            $this->mysql->query($create_table);
            return true;
        }
        return false;
    }

    public function checkEmail() {
        if (!$this->createDb()) {
            $this->mysql->select_db($this->db_name);
            $query = "SELECT email FROM visitors WHERE email = '{$this->visitor['email']}'";
            $result = $this->mysql->query($query);
            if (!$result || $this->mysql->affected_rows > 0) {
                return false;
            }
        }
        return true;
    }

    public function addNewVisitor() {
        if ($this->checkEmail()) {
            $this->mysql->select_db($this->db_name);
            $query = "INSERT INTO visitors (name, lastname, email, ticket)"
                    . "VALUES ('{$this->visitor['name']}',"
                    . " '{$this->visitor['lastname']}',"
                    . " '{$this->visitor['email']}',"
                    . " '{$this->visitor['ticket']}')";
            $result = $this->mysql->query($query);
            $this->mysql->close();
            if ($result) {
                return true;
            }
        }
        return false;
    }

    protected function query($query) {
        if (!$this->mysql->query($query)) {
            return false;
        }
        return true;
    }

}
