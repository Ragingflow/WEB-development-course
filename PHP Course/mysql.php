<pre>
<?php

//Расширение mySQL

// Устанавливаем соединение с сервером БД и создаем линк на базу данных
/*
 * $conn = @mysql_connect('127.0.0.1:8889', 'root', 'root') or die('Error');

mysql_select_db('webdev') or die('Error DB');

$sql = 'SELECT * FROM users';

$result = mysql_query($sql);
*/
//$row = mysql_fetch_array($result); // MYSQL_BOTH
//$row = mysql_fetch_array($result, MYSQL_NUM); // MYSQL_NUM
//$row = mysql_fetch_array($result, MYSQL_ASSOC); // MYSQL_ASSOC
//$row = mysql_fetch_array($result, MYSQL_ASSOC); // MYSQL_ASSOC

/*
while($row = mysql_fetch_array($result, MYSQL_ASSOC)){
    echo $row['user_name']. "<br>";
}
*/

// Точечная выборка
//mysql_result($result, 1, "user_name");


//mysql_num_rows($result); //Количество записей
//mysql_num_fields($result); //Кол-во полей
//mysql_field_name($result, int field); //Имя поля

//mysql_affected_rows([$conn]); //Кол-во изменений в строках посе запроса. Нужно вызывать сразу после запроса


//mysql_insert_id([$conn]) //id последней записи. Можно получить сразу после запроса INSERT. Работает только если есть поле с автоинкрементом, в противном случае вернет 0


// Функции для отслеживания ошибок
//mysql_errno ([$conn]); // Возвращает номер ошибки
//mysql_error ([$conn]); // Возвращяет описание ошибки
/*
if(mysql_errno() > 0){
    echo mysql_errno(). ": ". mysql_error();
}
*/

//mysql_close($conn);





// Расширение mySQLi

// Устанавливаем соединение с сервером БД и создаем линк на базу данных
/*
$conn = mysqli_connect('127.0.0.1:8889', 'root', 'root', 'webdev') or die('Error');

$result = mysqli_query($conn, "SELECT * FROM users");

while($row = mysqli_fetch_array($result,MYSQLI_NUM)){
    echo $row[1];
}
*/

// mysqli_close($conn);



// OOP подход
//$mysqli = new mysqli('127.0.0.1:8889', 'root', 'root', 'webdev');
//$result = $mysqli->query("SELECT 'Привет, дорогой пользователь MySQL!' AS _message FROM DUAL");
//$row = $result->fetch_assoc();
//echo htmlentities($row['_message']);



// Использование SQL View

// CREATE VIEW v AS SELECT id, date, title AS value FROM pages



//Использование подготовленных запросов

/*
mysql_connect("localhost", "root", "password");
mysql_select_db("test");

mysql_query("PREPARE myinsert FROM
       'INSERT INTO
            test_table (name, price)
            VALUES (?, ?)'");

for ($i = 0; $i < 1000; $i++){

    mysql_query("SET @name = 'Товар # $i'");
    mysql_query("SET @price = " . ($i * 10));
    mysql_query("EXECUTE myinsert USING @name, @price");

}
mysql_close();
*/



/*
$connection = mysqli_connect("localhost", "root", "root", "webdev");

mysqli_query($connection, "PREPARE customselect FROM
       'SELECT * FROM pages 
            WHERE id = ?'");



mysqli_query($connection, "SET @id = 2");

$result = mysqli_query($connection,"EXECUTE customselect USING @id");

mysqli_close($connection);
*/









?>
</pre>
