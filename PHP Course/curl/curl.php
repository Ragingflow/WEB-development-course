<?php

require '_header.php';

// php_curl

// Использование cURL


//echo file_get_contents('https://google.com.ua');



// Использование cURL

/*
// Создание
$ch = curl_init();

// Установка опций
curl_setopt($ch, CURLOPT_URL, "https://www.google.com.ua");

// Выполнение
echo curl_exec($ch);


// Закрытие
curl_close($ch);*/



// CURLOPT_RETURNTRANSFER:boolean
/*
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, HOST_NAME . "test.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
echo curl_exec($ch);
curl_close($ch);
*/


// CURLOPT_HEADER:boolean
/*$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, HOST_NAME . "test.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 1);
echo curl_exec($ch);
curl_close($ch);*/


// CURLOPT_NOBODY:boolean

/*$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, HOST_NAME . "test.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_NOBODY, 1);
echo curl_exec($ch);
curl_close($ch);*/


// CURLOPT_FILE:streamresource
/*
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, HOST_NAME . "test.php");
$fp = fopen('empty.txt', 'w');
curl_setopt($ch, CURLOPT_FILE, $fp);
curl_exec($ch);
curl_close($ch);
*/


// CURLOPT_WRITEHEADER
/*
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, HOST_NAME . "test.php");
$fp = fopen('empty.txt', 'w');
$fh = fopen('headers.txt', 'w');
curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_WRITEHEADER, $fh);
curl_exec($ch);
curl_close($ch);
*/


// CURLOPT_POST:boolean
// CURLOPT_POSTFIELDS:mixed
/*
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, HOST_NAME . "posttest.php");
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, "Hello=World&Foo=Bar&Name=Igor");
curl_exec ($curl);
curl_close ($curl);]
*/


// CURLOPT_PUT:boolean
// CURLOPT_INFILE:streamresource
// CURLOPT_INFILESIZE:integer
/*
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, HOST_NAME . "upload/put.txt");

// File creation
$str = "Hello, world!";
$fp = tmpfile();
fwrite($fp, $str);
fseek($fp, 0);

curl_setopt($curl, CURLOPT_PUT, true);
curl_setopt($curl, CURLOPT_INFILE, $fp);
curl_setopt($curl, CURLOPT_INFILESIZE, strlen($str));


$result = curl_exec($curl);
fclose($fp);
curl_close($curl);
*/


// CURLOPT_HEADERFUNCTION:string
// CURLOPT_BINARYTRANSFER:boolean
/*
function curlHeaderCallback($curl, $headers){

    header('Content-Disposition: attachment; filename="file-name.zip"');
    return strlen($headers);
}

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, HOST_NAME . "zip.php");
curl_setopt($curl, CURLOPT_BINARYTRANSFER, 1);
curl_setopt($curl, CURLOPT_HEADERFUNCTION, 'curlHeaderCallback');

curl_exec($curl);

$result = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

if ($result != 200) {
    print 'Ошибка: ' . $result;
}*/


// Опции для заголовков
/*$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, HOST_NAME . "alloptions.php");
curl_setopt($curl, CURLOPT_USERAGENT, "Super browser");
curl_setopt($curl, CURLOPT_REFERER, "http://google.com");
curl_setopt($curl, CURLOPT_COOKIE, "name=John");
curl_setopt($curl, CURLOPT_HTTPHEADER, ["Header1: Value1", "Header2: Value2"]);
curl_exec ($curl);
curl_close ($curl);*/


// Получение информации
// mixed curl_getinfo ( resource $ch [, int $opt = 0 ] )
//CURLINFO_HTTP_CODE
//CURLINFO_FILETIME
//CURLINFO_PRIMARY_IP
//CURLINFO_LOCAL_IP
//CURLINFO_HEADER_SIZE
//CURLINFO_SIZE_DOWNLOAD
//CURLINFO_CONTENT_TYPE
//CURLINFO_CONTENT_LENGTH_DOWNLOAD

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, HOST_NAME . "test.txt");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_exec ($curl);

var_dump(curl_getinfo($curl/*, CURLINFO_CONTENT_TYPE*/));


curl_close ($curl);
?>

