<?php


class Singleton {

    private static $instance = null;

    /**
     * @return Singleton
     */
    public static function getInstance() {
        if(null == self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {}
    private function __clone(){}
    public function test() {
        var_dump($this);
    }


}

$obj = Singleton::getInstance();

$obj->test();

//$obj = new Singleton(); // Fatal error:
//$obj = clone $obj; // Fatal error: