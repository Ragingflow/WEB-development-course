<?php

require __DIR__ . '/vendor/autoload.php';

use PHPUnit\Framework\TestCase;

// Использование утверждений
/*
class MyClassTest extends TestCase{
    public function testMyFunction(){
        echo $this->assertEquals(10, 10); // true
        echo $this->assertEquals(10, 9); // false
        echo $this->assertTrue(1); // true
        echo $this->assertTrue(0); // false
        echo $this->assertFalse(1); // false
        echo $this->assertFalse(0); // true
    }
}*/


/*
class ArrayTest extends TestCase{

    public function testCondition(){

        $arr = [];
        $this->assertEquals(0, count($arr));

        array_push($arr, 'element');
        $this->assertEquals('element', $arr[count($arr)-1]);
        $this->assertEquals(1, count($arr));

        $this->assertEquals('element', array_pop($arr));
        $this->assertEquals(0, count($arr));

    }
}
*/

// Использование аннотации @depends для описания зависимостей
//
//class MyClassTest extends TestCase
//{
//    public function testOne(){
//        return 1;
//    }
//
//    /**
//     * @depends testOne
//     */
//    public function testTwo($num){
//        echo $this->assertEquals($num, 1);
//    }
//
//}
//
//
//class StackTest extends TestCase{
//
//    public function testEmpty(){
//        $arr = [];
//        $this->assertTrue(empty($arr));
//        return $arr;
//    }
//
//    /**
//     * @depends testEmpty
//     */
//    public function testPush(array $arr){
//        array_push($arr, 'foo');
//        $this->assertEquals('foo', $arr[count($arr)-1]);
//        $this->assertFalse(empty($arr));
//        return $arr;
//    }
//
//    /**
//     * @depends testPush
//     */
//    public function testPop(array $arr){
//        $this->assertEquals('foo', array_pop($arr));
//        $this->assertTrue(empty($arr));
//    }
//}
//


// Использование источников данных
//
//class MyClassTest extends TestCase
//{
//    //  [1, 1], [2, 2], [3, 4], [4, 4]
//
//    /**
//     * @dataProvider provider
//     */
//    public function testTwo($num1, $num2){
//        echo $this->assertEquals($num1, $num2);
//    }
//
//    public function provider(){
//        return [
//            [1, 1], [2, 2], [3, 4], [4, 4]
//        ];
//    }
//}
//

//
//
//class DataTest extends TestCase{
//
//    /**
//     * @dataProvider provider
//     */
//    public function testAdd($a, $b, $c){
//        $this->assertEquals($c, $a + $b);
//    }
//
//    public function provider(){
//        return array(
//            array(0, 0, 0),
//            array(0, 1, 1),
//            array(1, 0, 1),
//            array(1, 1, 3)
//        );
//    }
//}
//


// Тестовые окружения

/*
// Тестовые окружения
class MyClassTest extends TestCase{

// setUpBeforeClass() вызывается вначале всего как конструктор
    public static function setUpBeforeClass(){
        echo "Start\n";
    }

// setUp() вызывается вперед каждым тестом (методом)
    protected function setUp(){
        echo "Test start\n"; }

// assertPreConditions() вызывается вперед каждым тестом эсертом
    protected function assertPreConditions(){
        echo "Assertion start\n";
    }

    public function testOne(){
        echo $this->assertTrue(true);
    }

// assertPostConditions() вызывается после каждого эсерта
    protected function assertPostConditions(){
        echo "Assertion finish\n";
    }

// tearDown() вызывается после каждого теста
    protected function tearDown(){
        echo "Test finish\n";
    }

// tearDownAfterClass() вызывается в самом конце
    public static function tearDownAfterClass(){
        echo "Finish\n";
    }

// onNotSuccessfulTest() вызывается в случае если мы не хотим чтобы тест прерывался при ошибке, а проходил до конца
    public static function onNotSuccessfullTest(){
        echo "Finish\n";
    }
}
*/



// Применение всех возможных шаблонных методов
/*
 * class TemplateMethodsTest extends TestCase{

    public static function setUpBeforeClass(){
        print __METHOD__ . "\n";
    }

    protected function setUp(){
        print __METHOD__ . "\n";
    }

    protected function assertPreConditions(){
        print __METHOD__ . "\n";
    }

    public function testOne(){
        print __METHOD__ . "\n";
        $this->assertTrue(TRUE);
    }

    public function testTwo(){
        print __METHOD__ . "\n";
        $this->assertTrue(FALSE);
    }

    protected function assertPostConditions(){
        print __METHOD__ . "\n";
    }

    protected function tearDown(){
        print __METHOD__ . "\n";
    }

    public static function tearDownAfterClass(){
        print __METHOD__ . "\n";
    }

    protected function onNotSuccessfullTest(Exception $e){
        print __METHOD__ . "\n";
        throw $e;
    }
}
*/





