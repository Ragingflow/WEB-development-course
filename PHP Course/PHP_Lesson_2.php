<pre>

<?php

// Управление выполнением программы: if


$condition = false;
$condition2 = true;

// 1
//if($condition)
//    echo "action 1";
//echo "action 2";

// 2
//if($condition) {
//    echo "action 1";
//}elseif ($condition2){
//    echo "action 2";
//}elseif ($condition2){
//    echo "action 2";
//}
//else{
//    echo "action default";
//}
//

/*
if($condition):
    echo "action 1";
elseif ($condition2):
    echo "action 2";
elseif ($condition2):
    echo "action 2";

else:
    echo "action default";

endif;
*/


?>


    <?php if ($condition): ?>
        <h1>Header</h1>
    <?php else: ?>
        <h2>Header</h2>
    <?php endif; ?>


    <?php

    //Операторы: сравнения
    //$a == $b // TRUE если $a равно $b.
    //$a === $b // TRUE если $a равно $b И имеет тотже тип
    //$a != $b // TRUE если $a не равно $b.
    //$a !== $b // TRUE если $a не равно $b ИЛИ вслучае, если они разных типов.
    //$a < $b // TRUE если $a строго меньше $b.
    //$a > $b // TRUE если $a строго больше $b.
    //$a <= $b // TRUE если $a меньше или равно $b.
    //$a >= $b // TRUE если $a больше или равно $b.

    //Операторы: логические
    //$a and $b // TRUE если и $a, и $b TRUE.
    //$a or $b	// TRUE если или $a, или $b TRUE.
    //!$a // TRUE если $a не TRUE.
    //$a && $b	// TRUE если и $a, и $b TRUE.
    //$a || $b	// TRUE если или $a, или $b TRUE.

    // Приоритеты

    //$a and ($b and $c) ~ $a and $b && $c
    //$a and ($b or $c) ~ $a and $b || $c

    // Новые операторы в PHP 7

    // Null-коалесцентный оператор

    // До PHP 7:

    /*
    if (isset($foo)) {
        $bar = $foo;
    } else {
        $bar = 'default'; // присваиваем $bar значение 'default' если $foo равен NULL
    }

    $bar = isset($foo) ? $foo : 'default';
    */

    /*
    $bar = $foo ?? 'default';
    $bar = $foo ?? $baz ?? 'default';
    */


    // Оператор “космический корабль”


    //$bar <=> $foo
    /*
    $bar = 2;
    $foo = 3;

    switch ($bar <=> $foo) {
        case 0:
            echo '$bar и $foo равны';
            break;
        case -1:
            echo '$foo больше';
            break;
        case 1:
            echo '$bar больше';
            break;
    }
    */


    // Array (массив)

    $arr = array();
    $arr = array(1, 2, 3);

    $arr = [];
    $arr = [1, 2, 3];


    //$user[] = "John";
    //$user[] = "root";
    //$user[] = "password";

    /*$user[1] = "John";
    $user[2] = "root";
    $user[3] = "password";
    $user[] = "new element";*/

//    $user = array("John", "root", "p@ssw0rd");
/*
    $user = array(
                0 => "John",
                1 => "root",
                2 => "p@ssw0rd"
            );

    print_r($user);

    $cnt = count($user);
*/

// Array (массив): ассоциативный

/*
$user["name"]= "John";
$user["login"]= "root";
$user["password"]= "p@ssw0rd";
//можно мешать индексы и имена ячеек
$user[] = "312-34-85";// имеет индекс 0
*/

    //тоже, что и
/*    $user = [
        "name"=>"John",
        "login"=>"root",
        "password"=>"p@ssw0rd",
        "312-34-85"
    ];

    print_r($user);

    echo $user["name"];//John
*/


// Array (массив): многомерный
/*

    $users = [
        0 => [
            "login" => "Administrator",
            "password" => "h734yuiw8"
        ],
        1 => [
            "login" => "John",
            "password" => "78dfud776s"
        ]
    ];
    echo $users[0]["login"]; // "Administrator"
*/


// Константы

    define('PI', 3.14);

/*    $index = 10 * PI;

    echo $index;*/


//    defined("имя_константы") – проверка константы.

/*
    if (defined('PI')) {
        echo PI;
    }
*/


//    В PHP 7
/*
    define('ANIMALS', [
        'dog',
        'cat',
        'bird'
    ]);


    echo ANIMALS[1];
*/


// Циклы

//    Операторы: инкремента и декремента


//    $a = 1;

//    echo "Вывод числа: " . $a++;
//    echo " Вывод числа: " . $a;

//    echo "Вывод числа: " . ++$a;
//    echo " Вывод числа: " . $a;

  /*

    // Циклы: for

    $sum = 1;
    for ($i=1; $i<=30; $i++){
        $sum += 3;
        print($sum);
    }

    // Циклы: while
    $sum = 1;
    while ($i<=30){
        $sum += 3;
        $i++;
        print($sum);
    }

    //    Циклы: do… while
    $i = 1;
    $sum = 1;
    do{
        $sum += 3;
        $i++;
        print($sum);
    } while($i<=30)


    */

// Цикл: foreach (короткий)
/*
    foreach ($array as $value){
        //Инструкция;
    }
    //$value - доступ к значению элемента массива*/
/*
    $user = array(
        "John",
        "root",
        "p@ssw0rd",
        "312-34-85"
    );

    foreach($user as $val){
        print("$val<br>");
    }*/


    // Цикл: foreach (длиный)

//    foreach ($array as $key => $value){
//        Инструкция;
//    }
    //$key - доступ к индексу элемента массива
    //$value - доступ к значению элемента массива

/*
    $user["name"]= "John";
    $user["login"]= "root";
    $user["password"]= "p@ssw0rd";
    $user[]= "312-34-85";
    foreach($user as $index => $val){
        print("Индекс $index равен $val<br>");
        $user[$key] = 5;
    }
*/


// PHP - пользовательские функции
/*
    function sayHello(){
        echo "Hello, world!";
    }

    sayHello();
*/

/*
    function sayHello($last, $name="Guest", $second_name="Guest"){
        echo "Hello, $name!", "<hr>";
    }
*/



//    sayHello('John');
//    $func = 'sayHello';
//    $func('John');


//
//    if(!function_exists("sayHello")){
//        function sayHello($name){
//            echo "Hello, $name!", "<hr>";
//        }
//    }


    // аргументы по умолчанию



//    sayHello();


    // Функции: области видимости

   /* $a = 1; // глобальная область видимости
    function Test(){
        echo $a; // локальная область видимости
    }

    Test();*/
/*
    $a = 1;
    $b = 2;
    function Sum(){
        $a = 1;
        $b = 2;
        global $a, $b;
        return $a + $b;
    }
    echo Sum();*/
/*
    function f() {
        $foo = 'a';
        // Работает только в PHP 5.
        global $$foo->bar;

        // Работает в PHP 5 и 7.
        global ${$foo->bar};

    }*/

    $a = 1;
    $b = 2;
    function Sum(){
        $b = 10;
        return $GLOBALS["a"] + $GLOBALS["b"];
    }
    print Sum();


    ?>





</pre>


