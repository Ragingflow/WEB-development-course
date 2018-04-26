<pre>
<?php


// Reflection API


// ReflectionFunction


function sayHello($name, $h){
    static $count = 0;
    static $number = 5;
    return "<h$h>Hello, $name</h$h>";
}


// Получить обзор функции - создает объект класса и экспортирует его
//Reflection::export(new ReflectionFunction('sayHello'));



// $func = new ReflectionFunction('sayHello');

// Вывод основной информации

/*
printf( // форматированный принт
    "<p>===> %s функция '%s'\n".
    " объявлена в %s\n".
    " строки с %d по %d\n",
    $func->isInternal() ? 'Internal' : 'User-defined',
    $func->getName(),
    $func->getFileName(),
    $func->getStartLine(),
    $func->getEndline()

);

if($statics = $func->getStaticVariables()) {
    printf("<p>---> Статическая переменная: %s\n", var_export($statics,1));
    printf("<p>---> Статическая переменная: %s\n", print_r($statics,1));
}


printf("<p>---> Результат вызова: ");

$result = $func->invoke('John', "1");

echo $result;
*/



// ReflectionParameter


function foo1($a, $b, $c) { }
function foo2(Exception $a, &$b, $c) { }
function foo3(ReflectionFunction $a, $b = 1, $c = null) { }
function foo4() { }

// Создание экземпляра класса ReflectionFunction
/*
$reflect = new ReflectionFunction("foo1");

echo $reflect;



foreach ($reflect->getParameters() as $i => $param ) {

    printf(
        "-- Параметр #%d: %s {\n".
        " Допускать NULL: %s\n".
        " Передан по ссылке: %s\n".
        " Обязательный?: %s\n".
        "}\n",
        $i,
        $param->getName(),
        var_export($param->allowsNull(), 1),
        var_export($param->isPassedByReference(), 1),
        $param->isOptional() ? 'нет' : 'да'
    );

}*/




//  ReflectionClass
/*abstract class MyClass{
    public $a = 1;
    protected $b = 2;
    private $c = 3;
    public static $cnt = 0;
    const HANDS = 2;
    abstract function foo();
    public static function bar(){
        //Что-то делаем
    }
    public function sayHello($name, $h="1"){
        static $count = 0;
        return "<h$h>Hello, $name</h$h>";
    }
}
*/

// Обзор пользовательского класса
//Reflection::export(new ReflectionClass('MyClass'));


// Обзор встроенного класса
//Reflection::export(new ReflectionClass('Exception'));


/*
interface MyInterface{}

class Object{}


class Counter extends Object implements MyInterface{
    const START = 0;
    private static $c = Counter::START;

    public function count() {
        return self::$c++;
    }
}

// Создание экземпляра класса ReflectionClass
$class = new ReflectionClass('Counter');

// Вывод основной информации
printf(
    "===> %s%s%s %s '%s' [экземпляр класса %s]\n" .
    " объявлен в %s\n" .
    " строки с %d по %d\n",
    $class->isInternal() ? 'Встроенный' : 'Пользовательский',
    $class->isAbstract() ? ' абстрактный' : '',
    $class->isFinal() ? ' финальный' : '',
    $class->isInterface() ? 'интерфейс' : 'класс',
    $class->getName(),
    var_export($class->getParentClass(), 1),
    $class->getFileName(),
    $class->getStartLine(),
    $class->getEndline()
);


// Вывод тех интерфейсов, которые реализует этот класс
printf("---> Интерфейсы:\n %s\n", var_export($class->getInterfaces(), 1));

// Вывод констант класса
printf("---> Константы: %s\n", var_export($class->getConstants(), 1));

// Вывод свойств класса
printf("---> Свойства: %s\n", var_export($class->getProperties(), 1));

// Вывод методов класса
printf("---> Методы: %s\n", var_export($class->getMethods(), 1));


if($class->isInstantiable()) {
    $counter = $class->newInstance();

    echo '---> Создан ли экземпляр класса '.$class->getName().'? ';
    echo $class->isInstance($counter) ? 'Да' : 'Нет';

    echo "\n---> Создан ли экземпляр класса Object()? ";
    echo $class->isInstance(new Object()) ? 'Да' : 'Нет';

}
*/



// ReflectionMethod
/*class Counter{
    private static $c = 0;

    final public static function increment(){
        return ++self::$c;
    }
}


// Создание экземпляра класса ReflectionMethod - передается имя класса и имя метода
$method = new ReflectionMethod('Counter', 'increment');


// Вывод основной информации
printf(
    "===> %s%s%s%s%s%s%s метод '%s' (который является %s)\n" .
    " объявлен в %s\n" .
    " строки с %d по %d\n",
        $method->isInternal() ? 'Встроенный' : 'Пользовательский',
        $method->isAbstract() ? ' абстрактный' : '',
        $method->isFinal() ? ' финальный' : '',
        $method->isPublic() ? ' public' : '',
        $method->isPrivate() ? ' private' : '',
        $method->isProtected() ? ' protected' : '',
        $method->isStatic() ? ' статический' : '',
        $method->getName(),
        $method->isConstructor() ? 'конструктором' : 'обычным методом',
        $method->getFileName(),
        $method->getStartLine(),
        $method->getEndline()
);

// Вывод статических переменных, если они есть
if ($statics= $method->getStaticVariables()) {
    printf("---> Статическая переменная: %s\n", var_export($statics, 1));
}

// Вызов метода
printf("---> Результат вызова: ");
$result = $method->invoke(null);

echo $result;*/




// ReflectionExtension

// Создание экземпляра класса ReflectionExtension
//$ext = new ReflectionExtension('standard');
/*$ext = new ReflectionExtension('mysqli');


printf(
    "Имя : %s\n" .
    "Версия : %s\n" .
    "Функции : [%d] %s\n" .
    "Константы : [%d] %s\n" .
    "Директивы INI : [%d] %s\n" .
    "Классы : [%d] %s\n",
    $ext->getName(),
    $ext->getVersion() ? $ext->getVersion() : 'NO_VERSION',
    sizeof($ext->getFunctions()),
    var_export($ext->getFunctions(), 1),

    sizeof($ext->getConstants()),
    var_export($ext->getConstants(), 1),

    sizeof($ext->getINIEntries()),
    var_export($ext->getINIEntries(), 1),

    sizeof($ext->getClassNames()),
    var_export($ext->getClassNames(), 1)
);
*/


// ReflectionProperty

/*
class Stringa{
    public $length = 5;
}

// Создание экземпляра класса ReflectionProperty
$prop = new ReflectionProperty('Stringa', 'length');

// Вывод основной информации о свойстве класса
printf(
    "===> %s%s%s%s свойство '%s' (которое было %s)\n" .
    " имеет модификаторы %s\n",
    $prop->isPublic() ? ' public' : '',
    $prop->isPrivate() ? ' private' : '',
    $prop->isProtected() ? ' protected' : '',
    $prop->isStatic() ? ' static' : '',
    $prop->getName(),
    $prop->isDefault() ? 'объявлено во время компиляции' : 'создано во время выполнения',
    var_export(Reflection::getModifierNames($prop->getModifiers()), 1)
);

// Создание экземпляра String
$obj= new Stringa();

// Получение текущего значения
printf("---> Значение: ");
var_dump($prop->getValue($obj));


// Изменение значения
$prop->setValue($obj, 10);
printf("---> Установка значения 10, новое значение равно: ");
var_dump($prop->getValue($obj));

// Дамп объекта
var_dump($obj);
*/


// How to get protected property of object in PHP with the Reflection API

abstract class MyClass{
    public $a = 1;
    protected $b = 2;
    private $c = 3;
    public static $cnt = 0;
    const HANDS = 2;
    abstract function foo();
    public static function bar(){
        //Что-то делаем
    }
    public function sayHello($name, $h="1"){
        static $count = 0;
        return "<h$h>Hello, $name</h$h>";
    }
}

class ChildClass extends MyClass {
    function foo(){}
}


$obj = new ChildClass;
//echo $obj->b; //Error

$reflection = new ReflectionClass($obj);
$property = $reflection->getProperty('b');
$property->setAccessible('b');

print_r($property->getValue($obj));


// Reflection API: примеры

// Получаем экземпляр класса ReflectionClass
$rc = new ReflectionClass('Имя_класса');

// Наследует ли класс тот или иной интерфейс?
$rc->implementsInterface('Имя_интерфейса');

// Имеет ли класс тот или иной метод?
$rc->hasMethod('Имя_метода');

// Получаем экземпляр класса ReflectionMethod
$rm = $rc->getMethod('Имя_метода');

// Является ли метод статическим?
$rm->isStatic();

// Выполнение статического метода
$result = $rm->invoke(null);

// Выполнение обычного метода
$instance = $rc->newInstance();
$result = $rm->invoke($instance);

new Exception();

?>
</pre>
