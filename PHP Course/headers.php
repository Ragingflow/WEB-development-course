<?php


// Запрос HEAD

//HEAD /folder/index.html HTTP/1.1
//Host:  www.example.com
//Accept:  */*
//Accept-Language:  ru
//Referrer:  Referrer:  http://google.com/search?q=keyword
//User-Agent:  Mozilla  4.0  (compatible;  MSIE  6.1,…)


//HTTP/1.1 200 OK
//Server: Microsoft IIS 6
//Content-Type: text/html
//Content-Length: 16345
//Last-Modified: Sun, 03 Jul 2005 18:00:00 GMT


// Header: Location

//header("Location: https://apple.com");
//exit;

//Проверка на отправленные заголовки
/*
if (!headers_sent()) {
    header('Location: http://www.example.com');
    exit;
}
*/
/*
header("Location: " . $_SERVER["PHP_SELF"]);
exit;

*/

//print_r($_POST);
/*
if(isset($_POST['text'])){
    header("Location: " . $_SERVER["PHP_SELF"]);
}
*/



// Header: Refresh

//header("Refresh: 1");

//header("Refresh: 3; https://apple.com");

/*
if(!empty($_POST)) {
    header("Refresh: 3; url=" . $_SERVER["HTTP_REFERER"]);
    echo "Your submission was successful";
}
*/



// Header: Content-type

//header("Content-type: text/html");
//header("Content-type: text/plain");

//header("Content-type: text/html;charset=windows-1251");
//header("Content-type: text/html;charset=utf8");

/*
header("Content-type: file/octet-stream");
header("Content-Disposition:attachment;filename=\"myfile.txt\"");
*/
/*
header("Content-type: application/pdf");
header("Content-Disposition:attachment; filename=\"myfile.pdf\"");
*/



//Header: Cache-Control и Expires

//header("Cache-Control: no-cache");

//header("Cache-Control: no-store"); // реальный запрет на кеширование
//
//header("Cache-Control: no-store,no-cache,must-revalidate");
//
//header("Expires: " . date("r"));

// Last-Modified


// Браузеры кешируют контент в любом случае, но если мы сомневаемся в этом, можно указать им это явно.
/*
header("Cache-Control: public");
header("Expires: " . date("r", time()+3600));
*/


// Header: Set-Cookie
//header("Set-Cookie: name=John; expires=Wed, 19 Sep 02 14:39:58 GMT")



?>

<?php /*date('H:i:s');*/ ?>

<!--
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=windows-1251">
</head>
-->
<pre>
    <h1>Blog header</h1>
<!--
    <form method="post">
        <input type="text" name="text" id="text">
        <button type="submit">Submit</button>
    </form>
-->

    <?php echo "<h2>Название блога</h2>" ?>
</pre>