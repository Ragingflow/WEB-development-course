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

?>
</pre>