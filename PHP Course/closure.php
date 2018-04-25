<pre>
<?php


// Standard PHP Library


// Класс Closure


// Обращение к функции через переменную
/*
function Hello($name){
    echo "Привет, $name";
}

$func = "Hello";
$func('World');*/


// Анонимная функция
/*$func = function ($name){
    echo "Привет, $name";
};

$func('World');

*/



// Использование
$arr = [1, 2, 3, 4, 5];

// Стандартный вариант
/*function foo($v){
    return $v * 10;
}
$new_arr = array_map('foo', $arr);

*/



// Хак
//$new_arr = array_map(create_function('$v', '$v * 10;'), $arr);


// Самый удобный вариант
/*
$new_arr = array_map(function ($v){
    return $v * 10;
}, $arr);


print_r($new_arr);
*/


// Closure (замыкание) - способность функции захватывать значение переменных вышележащего контекста.

$string = "Hello, world!";

/*
$closure = function () use ($string) {
    echo $string;
};

$closure();
*/

// В фунцию-замыкание `$closure()` переменные передаются не по ссылке а в виде копии ее значения

/*

$closure = function () use (&$x) {
    ++$x;
};

echo $x;

$closure();
echo $x;
$closure();
echo $x;
*/



// Использование
/*
$mult = function($num){
    return function($x) use ($num){
        return $x * $num;
    };
};

$mult_by_2 = $mult(2);
$mult_by_3 = $mult(3);

echo $mult_by_2(2); // 4
echo $mult_by_3(2); // 6
*/


// Использование в классах

class User{
    private $_name;


    public function __construct($n){
        $this->_name = $n;
    }

    public function greet($greeting){
        return function() use ($greeting) {
            return "$greeting {$this->_name}!";
        };
    }
}

$user = new User("John");
$en = $user->greet('Hello');
echo $en();


$ru = $user->greet('Привет');
echo $ru();








?>
</pre>
