<?php

namespace Anton_Poliakov\App;

use DOMDocument;

use mysqli;

class Store
{
    const USERS_TABLE = 'users';

    public $store;

    public function __construct()
    {
        $this->connect();
    }

    public function storexml($data)
    {
        $store = new DOMDocument();

        $dir = config('database_xml');

        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }

        $file = $dir . config('xml_prefix') . date('d_m_y', time()) . config('xml_postfix');

        if (!is_file($file)) {
            $store->appendChild(
                $store->createElement(config('base_element'))
            );
        } else {
            $store->load($file);
        }

        $root = $store->documentElement;
        $user = $root->appendChild($store->createElement('user'));

        foreach ($data as $key => $value) {
            $item = $store->createElement($key, $value);
            $user->appendChild($item);
        }

        return $store->save($file);

    }

    public function storetxt($data)
    {
        if (getFromTxt($data['email'])) {
            $data['errors']['email'] = config('email_exist');
            return $data;
        }

        $path = config('database_dir');

        if (!is_dir($path)) {
            mkdir($path, 0777, true);
        }

        $storage = fopen($path .
            config('file_prefix') . date('d_m_y', time()) .
            config('file_postfix'), 'a+'
        ) or die('Can\'t create storage file.');

        fwrite($storage, json_encode($data) . "\n");
        fclose($storage);
        header("Location: " . "/");
        exit;
    }

    public function storemysql($data)
    {
        if ($this->store->connect_errno) {
            echo config('mysql_connect') . $this->store->connect_error;
        }

        $this->createUsersTable();

        if ($row = $this->getUserByEmail($data['email'])) {
            return $row;
        }

        $this->createUser($data);

        header("Location: " . "/");
        exit;

    }

    public function getUserByEmail($email)
    {
        $result = $this->store->query("SELECT * FROM users WHERE email = \"{$email}\"");
        return $result->fetch_assoc();
    }

    public function createUser($data)
    {
        return $this->store->query(
            "INSERT INTO users (id, firstname, lastname, email, ticket, date)
                VALUES (
                  NULL,
                  '{$data['firstname']}',
                  '{$data['secondname']}',
                  '{$data['email']}',
                  '{$data['ticket']}',
                  CURRENT_TIMESTAMP
                );"
        );
    }

    private function createUsersTable()
    {
        $table = self::USERS_TABLE;

        return $this->store->query(
            "CREATE TABLE IF NOT EXISTS tickets.'{$table}' (
                id INT(10) NOT NULL AUTO_INCREMENT ,
                firstname VARCHAR(50) NOT NULL ,
                lastname VARCHAR(50) NOT NULL ,
                email VARCHAR(50) NOT NULL ,
                ticket VARCHAR(50) NOT NULL ,
                date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY  (id),
                UNIQUE  (email)
            ) ENGINE = InnoDB;"
        );
    }

    public function connect()
    {
        $this->store = new mysqli(
            config('host'),
            config('login'),
            config('pass'),
            config('db')
        );
    }
}