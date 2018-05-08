<pre>
<?php

// Типы регулярных выражений в PHP

// POSIX
// PCRE


//preg_match('/./', 'PHP 5', $matches);
//echo $matches[0] // P


//preg_match('/PHP.5/', 'PHP 5', $matches);
//echo $matches[0] // PHP 5


//preg_match('/PHP.5/', 'PHP-5', $matches);
//echo $matches[0] // PHP-5


//preg_match('/PHP.5/', 'PHP5', $matches);
//echo $matches[0];


//preg_match('/.com/', 'site.com', $matches);
//echo $matches[0]; // .com


//preg_match('/.com/', 'site-com', $matches);
//echo $matches[0]; // -com


//preg_match('/\.com/', 'site-com', $matches);
//echo $matches[0]; //


//preg_match('/\.com/', 'site.com', $matches);
//echo $matches[0]; // .com



// Повторения

/*
{m} точное вхождение
{m,n} минимум и максимум
{m,} минимум
*/

//preg_match('/tre{1,2}f/', 'trf', $matches);
//echo $matches[0]; //

/*
Квантификаторы
? что и {0,1}
+ что и {1,}
* что и {0,}
*/



// Метасимволы


// ^ Ограничение начала строки
//preg_match('/^abc/', 'abcd', $matches);
//echo $matches[0]; // abc


// $ Ограничение конца строки
//preg_match('/xyz$/', 'abcdxyz', $matches);
//echo $matches[0]; // xyz


// [...] Kласс искомых символов.
//preg_match('/[0-9]+/', 'PHP is released in 1995', $matches);
//echo $matches[0]; // 1995


// (...) Группировка элементов.
//$subject = 'PHP is released in 1995';
//$pattern = '/PHP [a-zA-Z ]+([12][0-9])([0-9]{2})/';
//preg_match($pattern, $subject, $matches);
//print_r($matches);



// Специальные последовательности

// \? \+ \* \[ \] \{ \} \\ Экранирование

//$subject = '4**';
//$pattern_in_apos = '/^4\*\*$/';
//$pattern_in_quot = "/^4\\*\\*$/";


//$subject = 'PHP\5';
//$pattern = '/^PHP\\\5/';
//$pattern = "/^PHP\\\\5/";

//preg_match($pattern, $subject, $matches);
//echo $matches[0];



// Жадные квантификаторы: * и +

//$subject = '<b>I am bold.</b> <i>I am italic.</i> <b>I am also bold.</b>';

//preg_match('#<b>(.+)</b>#', $subject, $matches);
//preg_match('#<b>(.+?)</b>#', $subject, $matches);

//print_r($matches);



// Модификаторы

// i ( [a-zA-Z] )


// m Многострочный поиск

//$subject = "ABC\nDEF\nGHI";
//preg_match('/^DEF/', $subject, $matches);
//echo $matches[0]; //

//preg_match('/^DEF/m', $subject, $matches);
//echo $matches[0]; // DEF


// s Однострочный поиск: "." = . + перевод строки
//$subject = "ABC\nDEF\nGHI";
//preg_match('/BC.DE/', $subject, $matches);
//echo $matches[0]; //


//preg_match('/BC.DE/s', $subject, $matches);
//echo $matches[0]; // BC\nDE


// x Пропуск пробелов и комментариев(#) в тексте шаблона
//$subject = "ABC\nDEF\nGHI";
//preg_match('/A B C/', $subject, $matches);
//echo $matches[0]; //

//preg_match('/A B C/x', $subject, $matches);
//echo $matches[0]; // ABC


// D Что и $, если строка не заканчивается \n
//preg_match('/BC$/', 'ABC\n', $matches);
//echo $matches[0]; //

//preg_match('/BC/D', 'ABC\n', $matches);
//echo $matches[0]; // BC


// A Что и ^ (начало строки)
//preg_match('/[a-c]{3}/i', '123ABC', $matches);
//echo $matches[0]; // ABC

//preg_match('/[a-c]{3}/iA', '123ABC', $matches);
//echo $matches[0]; //


// U Ленивость по-умолчанию
//$subject = '<b>I am bold.</b> <i>I am italic.</i> <b>I am also bold.</b>';
//preg_match('#<b>(.+)</b>#U', $subject, $matches);
//echo $matches[1]; // I am bold.




// Функции


// Функции поиска

/*$subject = '<b>I am bold.</b> <i>I am italic.</i>';
$pattern = '#<[^>]+>(.*)</[^>]+>#U';

preg_match($pattern, $subject, $matches);
print_r($matches);


preg_match_all($pattern, $subject, $matches);
print_r($matches);


preg_match_all($pattern, $subject, $matches, PREG_PATTERN_ORDER);
print_r($matches);

preg_match_all($pattern, $subject, $matches, PREG_SET_ORDER);
print_r($matches);*/


// Функция замены
/*
$string = 'April 15, 2003';
$pattern = '/(\w+) (\d+), (\d+)/i';
$replacement = '${1}1,$3';
echo preg_replace($pattern, $replacement, $string);
*/


// Функция разделения

/*$subject = 'hypertext language, programming';
$pattern = '/[\s,]+/';
$words = preg_split($pattern, $subject);
print_r($words);*/



//$chars = preg_split('//', 'PHP');
$chars = preg_split('//', 'PHP', 0, PREG_SPLIT_NO_EMPTY);
print_r($chars);  // [0] => P, [1] => H, [2] => P


?>
</pre>
