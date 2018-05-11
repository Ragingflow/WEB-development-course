<?php
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ .'/../classes/demo.php';

use PHPUnit\Framework\TestCase;

class DemoTest2 extends TestCase {

    public function setUp() {
        $this->demo = new Demo();
    }

    public function testSum() {
        $this->assertEquals(4, $this->demo->sum(2,2));
    }

    public function testSubtract() {
        $this->assertEquals(0, $this->demo->subtract(2,2));
    }

    public function tearDown() {
        unset($this->demo);
    }
}
