<?php

require_once__DIR__ . '/../vendor/autoload.php';
require_once __DIR__ .'/../classes/somedemo.php';

use PHPUnit\Framework\TestCase;

class SomeDemoTest extends TestCase {

    public function setUp() {
        $this->demo = new SomeDemo();
    }

    public function testDiv() {
        $this->assertEquals(1, $this->demo->div(2,2));
    }

    public function testMult() {
        $this->assertEquals(4, $this->demo->mult(2,2));
    }

    public function tearDown() {
        unset($this->demo);
    }
}
?>