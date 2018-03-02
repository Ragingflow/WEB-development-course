<pre>
<?php


// Работа с протоколом HTTP


// HTTP – Hypertext Transfer Protocol


// Запрос клиента:

//GET /folder/index.html HTTP/1.1
//Host: www.example.com
//Accept: */*
//Accept-Language: ru
//Referrer: http://google.com/search?q=php
//User-Agent: Mozilla 4.0 (compatible; MSIE 6.1,…)


// Ответ сервера:
//HTTP/1.1 200 OK
//Server: MiCrosoft IIS 6
//Content-Type: text/html
//Content-Length: 16345
//Last-Modified: Sun, 03 Jul 2005 18:00:00 GMT
//<html>
//...
//</html>



// Обработка запросов

// Для GET:
// print_r($_GET);
// print($_GET['param1']);

// Для POST:

/*
if($_SERVER['REQUEST_METHOD']==='POST'){
    print_r($_POST);
}
*/


// Фильтрация данных из запроса
// strip_tags($_POST["name"]) - вырезать все html теги - минимум что надо сделать
// rtrim($_POST["name"]) - обрезает пробелы справа
// ltrim($_POST["name"]) - обрезает пробелы слева
// trim(strip_tags($_POST["name"])) - удалить пробелы в начале и в конце
// abs($_POST["age"]) - получение абсолютного значения числа


// always_populate_raw_post_data

// php://input

if(isset($_POST)){
    $post = $_POST;
}else {
    $body = file_get_contents('php://input');
    $data = array();
    parse_str($body, $data);
}




print_r($post);
var_export($post);




?>




</pre>