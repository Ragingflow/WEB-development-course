<pre>
<?php

// Классы и объекты
/*
class MyClass {
    //  определение свойств
    //  определение методов
}

// Инициализация класса
$myObj = new MyClass();
*/

// Свойства класса
/*
class MyClass  {
    public $property1 = "some value";
    protected $property2 = "value2";
    private $property3;
}

$myObj = new MyClass();
echo $myObj->property1;
*/


// Методы класса
/*
class  MyClass  {
    function  myMethod($var1,$var2){
        //  операторы
    }
}

//Вызов метода
$myObj = new MyClass();
$myObj->myMethod('value1','value2');
*/

// $this
/*
class  MyClass  {
    public  $property1;
    function  myMethod(){
        // Вывод  значения  свойства внутри метода класса через $this
        print($this->property1);
    }

    function  callMethod(){
        //  Вызов  метода
        $this->myMethod();
    }
}
*/



// Конструкторы и деструкторы

// __construct()

/*
class  MyClass  {
    public  $property;
    function  __construct($var){
        $this->property = $var;
        echo  "Вызван  конструктор";
    }
    function  __destruct(){
        echo  "Вызван  деструктор";
    }
}

$obj = new MyClass('new value');
echo $obj->property;
*/



// Псевдо-константы применимые в OOP __METHOD__ и __CLASS__
/*
class MyClass {
    function myMethod(){
        echo "Вызов метода ", __METHOD__;
    }
    function getClassName(){
        echo "Имя класса ", __CLASS__;
    }
}

$obj = new MyClass();
// Вызов метода MyClass::myMethod
$obj->myMethod();
// Имя класса MyClass
$obj->getClassName();

*/



// Новые принципы работы с объектами

// $obj1 = $obj2 // Объекты передаются по ссылке, а не по значению

/*
class MyClass {
    public $property;
}
$myObj = new MyClass();
$myObj->property = 1;


$myObj2 = $myObj;
//echo $myObj2->property; // 1
$myObj2->property = 2;
//echo $myObj->property; // 2
*/


// Клонирование объекта
/*
class  MyClass  {
    public  $property;
}
$myObj = new MyClass();
$myObj->property = 1;

$myObj2 = clone $myObj;
$myObj2->property = 2;
echo $myObj2->property; // 2
echo $myObj->property; // 1
*/

// Метод __clone()

/*
class MyClass  {
    public $property;
    public $property2;
    public $property3;
    function  __clone(){
        $this->property  = 2;
        $this->property1  = 1;
    }
}
$myObj = new MyClass();
$myObj->property = 1;
$myObj2 = clone $myObj;
echo $myObj2->property; // 2
*/



// Наследование

/*
class Car {
    public $numWheels = 4;
    function printWheels() {
        echo $this->numWheels;
    }
}

class Toyota extends Car {
    public $country = 'Japan';
    function printCountry(){
        echo $this->country;
    }
}

$myCar = new Toyota();

$myCar->printWheels();
$myCar->printCountry();
*/



//Перегрузка методов
/*

class Car {
    public $numWheels = 4;
    function printWheels() {
        echo $this->numWheels;
    }
}

class Toyota extends Car {
    public $country = 'Japan';
    function printCountry(){
        echo $this->country;
    }
    function printWheels() {
        echo 'Это перегруженный метод';
        parent::printWheels();
    }
}

$myCar = new Toyota();

$myCar->printWheels();
$myCar->printCountry();
*/


// Спецификаторы доступа

class MyClass {
    public  $public  = 1;
    protected $protected  = 2;
    private $private = 3;
    function myMethod() {
        echo $this->public; //Ok
        echo $this->protected; //Ok
        echo $this->private; //Ok
    }
}

// $obj = new MyClass();
//echo $obj->public; //Ok
//echo $obj->protected; //Error
//echo $obj->private; //Error

// $obj->myMethod();
/*
class NewClass extends MyClass {
    function newMethod() {
        echo $this->public; //Ok
        echo $this->protected; //Ok
        echo $this->private; ///Error
    }
}

$obj = new NewClass();
$obj->newMethod();
*/



// Обработка исключений
/*
try {
    $a=1;
    $b=0;
    if($b==0) throw new Exception("Деление на 0 !!!");
    echo $a/$b;
}catch (Exception $e){
    echo "Произошла ошибка - ",
    $e->getMessage(),
    $e->getLine(),
    $e->getFile();
}finally {
    echo "Это finally";
}*/


// Создание собственных исключений
/*
class MathException extends Exception {
    function __construct($message) {
        $message .= " в вычислениях";
        parent::__construct($message);
    }
}


class LogicalException extends Exception {
    function __construct($message) {
        $message .= " в логике";
        parent::__construct($message);
    }
}

try {
    $a = 1;
    $b = 0;
    if ($b == 0) throw new MathException("Произошла ошибка");
    if ($b > $a) throw new LogicalException("Что-то не так");
    echo $a / $b;
} catch (MathException $e) {
    echo $e->getMessage(),
    " в строке ", $e->getLine(),
    " файла ", $e->getFile();
} catch (LogicalException $e) {
    echo $e->getMessage(),
    " в строке ", $e->getLine(),
    " файла ", $e->getFile();
}

*/



// Перебор свойств объекта
/*
class Human {
    public $name;
    public $yearOfBorn;
    function __construct($name, $yearOfBorn){
        $this->name = $name;
        $this->yearOfBorn = $yearOfBorn;
    }
}

$billGates = new Human('Bill Gates',1955);

foreach ($billGates as $name=>$value){
    print($name . ':' . $value . '<br>');
}
*/



// Константы класса
/*
class Human  {
    const HANDS = 2;
    function printHands(){
        print(self::HANDS); //  NOT  $this!
    }
}

print ('Количество рук: ' . Human::HANDS);
*/


// Абстрактные методы и классы
/*
abstract class Car {

    public $petrol;

    function startEngine(){
        print('Start Engine!');
    }

    abstract function stopEngine();
}


class InjectorCar extends Car {
    public function stopEngine(){
        print('Stop Engine!');
    }
}


//$myMegaCar = new Car();  //Ошибка!

$myMegaCar = new InjectorCar();
$myMegaCar->startEngine();
$myMegaCar->stopEngine();
*/



// Интерфейсы

/*
interface Hand {
    function useKeyboard();
    function touchNose();
}

interface Foot {
    function runFast();
    function playFootball();
}

class Human implements Hand, Foot {
    function useKeyboard() {

    }
    function touchNose(){

    }

    function runFast(){

    }
    function playFootball(){

    }
}

$vasyaPupkin = new Human();
$vasyaPupkin->touchNose();
*/


// Финальные методы
/*
class Mathematics  {
    final function countSum($a,$b){
        print('Сумма:  '  .  $a  +  $b);
    }
}

class Algebra extends Mathematics  {
    public function countSum($a,$b){
        $c  =  $a  +  $b;
        print("Сумма $a и $b: $c");
    }
}
*/


// Финальные классы

/*
final class Breakfast {
    function eatFood($food){
        print("eat $food!");
    }
}

// Возникнет ошибка
class McBreakfast extends Breakfast {

}
*/


// Статические свойства и методы класса

/*
class SocialLikes {
    static $likersCount = 0;
    function __construct(){
        ++self::$likersCount;
    }
    static function welcome(){
        echo 'Wellcome to social network!';
        //Никаких $this внутри статического метода!
    }
}


$john = new SocialLikes();
$michael = new SocialLikes();

print('Likes qty: ' . SocialLikes::$likersCount);

SocialLikes::welcome();
*/



// Ключевое слово instanceof
/*
class  Human  {}
$myBoss  =  new  Human();

if($myBoss instanceof Human)
    print('My boss is a Human');



class Woman extends Human {}
$woman = new Woman();


if($woman instanceof Human)
    print('Wooman is a Human');*/

/*
interface  LotsOfMoney  {}

class  ReachPeople  implements  LotsOfMoney  {}
$billGates  =  new  ReachPeople();
if($billGates  instanceOf  LotsOfMoney)
    print ('Bill Gates is a reach man')
*/

// is_a( object $object , string $class_name)



// Функция __autoload()
/*
function __autoload($cl_name){
    print('Попытка создать объект класса '.$cl_name);
    include "$cl_name.php";
}

$obj = new undefinedClass();
*/

?>
</pre>