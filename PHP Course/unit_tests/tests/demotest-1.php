<?php
declare(strict_types=1);
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ .'/../classes/demo.php';

use PHPUnit\Framework\TestCase;

class DemoTest extends TestCase {

    public function testSum() {
        $demo = new Demo();
        $this->assertEquals(4, $demo->sum(2,2));
        $this->assertNotEquals(3, $demo->sum(1,1));
    }

}