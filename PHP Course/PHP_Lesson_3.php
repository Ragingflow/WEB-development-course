<pre>
<?php

// Функции: статические переменные
/*
function Test(){
    static $a = 0;
    echo $a++;
}

Test();
Test();
Test();
*/

// Передача аргумента по ссылке

/*
function foo(&$var) {
    $var++;
}

$a = 5;
foo($a);
echo $a;
*/

/*
foreach ($array as $key=>&$value){

}*/

/*
function foo(&$var){
    return ++$var;
}

function &bar(){
    $a = 5;
    return $a;
}


print foo(bar());
*/


// Рекурсивный вызов функций
/*
function factorial($n) {
    if ($n == 0) return 1;
    return $n * factorial($n-1);
}

$result = factorial(5);
echo "5! = " . $result;
*/



// Функции для работы с массивами

// http://php.net/manual/ru/ref.array.php

// array_pop
// array_shift
// array_rand
// array_reverse
// count
// in_array // in_array('foot',$transport)
// array_key_exists // array_key_exists (2, $transport)
// implode // implode(',', $transport)



// Работа с внутренним указателем массива

/*
$transport = array('foot', 'bike', 'car', 'plane');

// current
// next
// prev
// end
// reset
// each() //Deprecated, с PHP 7.2.0 ее использование крайне не рекомендовано

print_r(current($transport));
next($transport);
next($transport);
next($transport);
prev($transport);
end($transport);
print_r(current($transport));
*/


// Функции даты и времени

// The Unix Epoch start - 01.01.1970, 00:00:00 GMT

// time() - Возвращает текущую метку времени Unix
// strtotime('next year') - Преобразует текстовое представление даты на английском языке в метку времени Unix (timestamp)

//echo strtotime('next year');
//echo strtotime('+ 2 days');
//echo strtotime('2018-03-08');

//$today = getdate();
//
//print_r($today);


// формат дат
/*
Коды формата дат(выборочно)
d // День месяца, 2 цифры с ведущими нулями от 01
D // Наименование дня недели, 3 символа от Mon
F // Полное наименование месяца, например January
G // Часы в 24-часовом формате без ведущих нулей От 0
H // Часы в 24-часовом формате с ведущими нулями
i // Минуты с ведущими нулями
j // День месяца без ведущих нулей От 1
l // Полное наименование дня недели, например Sunday
m // Порядковый номер месяца с ведущими нулями От 01
M // Наименование месяца, 3 символа От Jan до Dec
n // Порядковый номер месяца без ведущих нулей От 1
r // Дата в формате: Thu, 21 Dec 2000 16:01:07 +0200
s // Секунды с ведущими нулями От 00 до 59
w // Порядковый номер дня недели От 0 (воскресенье)
W // Порядковый номер недели года
Y // Порядковый номер года, 4 цифры
z // Порядковый номер дня в году (нумерация с 0)
*/

//echo date('d.m.Y H:i:s');
//echo date('r');
//echo date('F');



// Предопределенные константы

// __LINE__
// __FILE__
// __FUNCTION__

//echo __LINE__;
//echo __FILE__;
//echo __FUNCTION__;


/*
function showConst(){
    echo "<br>","Line: ",__LINE__, "<br>";
    echo "File: ",__FILE__,"<br>";
    echo "Function: ",__FUNCTION__;
}
showConst();
*/

// PHP_EXTENSION_DIR     - Путь к директории с установленным PHP
// PHP_OS                - Ядро операционной системы
// PHP_VERSION           - Версия PHP
// PHP_CONFIG_FILE_PATH  - Путь к - php.ini

//phpinfo(); - Выводит информацию о текущей конфигурации PHP


// Предопределенные переменные: _SERVER

// $_SERVER //Массив, содержащий информацию о сервере и его среде
// DOCUMENT_ROOT
// GATEWAY_INTERFACE
// HTTP_ACCEPT
// HTTP_ACCEPT_CHARSET
// HTTP_ACCEPT_ENCODING
// HTTP_ACCEPT_LANGUAGE
// HTTP_CONNECTION
// HTTP_HOST
// HTTP_REFERER
// HTTP_USER_AGENT
// PATH_TRANSLATED
// PHP_AUTH_PW
// PHP_AUTH_TYPE
// PHP_AUTH_USER
// PHP_SELF
// QUERY_STRING
// REMOTE_ADDR
// REMOTE_PORT
// REQUEST_METHOD
// REQUEST_URI
// SCRIPT_FILENAME
// SCRIPT_NAME
// SERVER_ADMIN
// SERVER_NAME
// SERVER_PORT
// SERVER_PROTOCOL
// SERVER_SIGNATURE
// SERVER_SOFTWARE

// print_r($_SERVER);

// setlocale(LC_TIME, "ru_RU");
// echo strftime(" in Russian is %A,");


?>




</pre>


