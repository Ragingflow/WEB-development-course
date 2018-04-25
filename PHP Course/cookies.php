<?php

// Cookie


// Cookie: первый запрос страницы

//GET /folder/index.php?name=John HTTP/1.1
//Host:  www.example.com
//Accept:  */*
//Accept-Language:  ru
//Referrer:  http://google.com/search?q=keyword
//User-Agent:  Mozilla  4.0  (compatible;  MSIE  6.1,…)

// Ответ сервера

//HTTP/1.1 200 OK
//Server: Microsoft IIS 6
//Content-Type: text/html
//Content-Length: 16345
//Last-Modified: Sun, 03 Jul 2005 18:00:00 GMT
//Set-Cookie: userName=Vasya


// Cookie: другие запросы страниц

//GET /folder/index.php HTTP/1.1
//Host:  www.example.com
//Accept:  */*
//Accept-Language:  ru
//Referrer:  http://google.com/search?q=keyword
//User-Agent:  Mozilla  4.0  (compatible;  MSIE  6.1,…)
//Cookie: userName=Vasya


//HTTP/1.1 200 OK
//Server: Microsoft IIS 6
//Content-Type: text/html
//Content-Length: 16345
//Last-Modified: Sun, 03 Jul 2005 18:00:00 GMT

// bool setcookie (
//   string $name
//   [, string $value = ""
//   [, int $expire = 0
//   [, string $path = ""
//   [, string $domain = ""
//   [, bool $secure = FALSE
//   [, bool $httponly = FALSE ]]]]]]
// )


//$value = 'test info';
//setcookie('TestCookie', $value);

//setcookie ("TestCookie", $value,time()+60);

//print_r($_COOKIE);
//echo $_COOKIE["TestCookie"];


//Создаем массив
//$array = array(
//    "name"=>"John",
//    "login"=>"root",
//    "pass"=>"p@ssw0rd"
//);
//
//$str = serialize($array);
//setcookie('user', $str);
/*
echo $_COOKIE["user"];

$array = unserialize($_COOKIE["user"]);
*/

// Cookie: удаление

/*
setcookie("TestCookie"); //- официальный способ удаления
setcookie("TestCookie", ""); //- запись в Cookie пустого значения
setcookie ("TestCookie", "", time() - 3600); //- перевод времени действия назад (параноидальный способ)
*/


// Хэширование: md5
$password = 'password';
$hash_password = md5($password);

echo $password;
echo "<br>";
echo $hash_password;
echo "<br>";
echo md5('password');



?>

<pre>
<?php /*print_r($array);*/ ?>
</pre>