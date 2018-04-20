<pre>
<?php


// PHP Data Objects
/*
foreach(PDO::getAvailableDrivers() as $driver){
    echo $driver.'<br />';
}
*/



// Соединение с базой данных

// MySQL
//mysql_connect('host', 'user', 'password');
//mysql_select_db('db');

// MySQLi
//$db = mysqli_connect('host', 'user', 'password', 'db'); // MySQLi ООП
//$db = new mysqli('host', 'user', 'password', 'db');


// PostgreSQL
//$db = pg_connect("host=host dbname=db user=user password=password");

// SQLite2
//$db = sqlite_open("db");

// SQLite2 ООП
//$db = new SQLiteDatabase("db");

// SQLite3
//$db = new SQLite3("db");


// PDO

// MySQL
//$pdo = new PDO('mysql:host=host;dbname=db', $user, $pass);

// PostgreSQL
//$pdo = new PDO('pgsql:host=host;dbname=db', $user, $pass);

// SQLite
//$pdo = new PDO('sqlite:db');


// Постоянное соединение
//$pdo = new PDO('mysql:host=host;dbname=test', $user, $pass, [PDO::ATTR_PERSISTENT => true]);


$pdo = new PDO('mysql:host=localhost:8889;dbname=webdev', 'root', 'root');


// Выполнение запроса без выборки (INSERT/UPDATE/DELETE)

//$sql = "INSERT INTO users(user_name, email) VALUES('john', 'john@smith.com')";


// MySQL
//$result = mysql_query($sql);

// MySQLi
//$result = mysqli_query($cnn, $sql);
// MySQLi $result = $db->query($sql);

// PostgreSQL
//$result = pg_query($sql);

// SQLite2
//$result = sqlite_exec($sql, $db);

// SQLite2 ООП
//$result = $db->queryExec($sql);

// SQLite3
//$result = $db->exec($sql);


// PDO
//$result = $pdo->exec($sql);

// Проверка ошибок

//if($result === false) echo "Ошибка в запросе";




// Экранирование строки

//$user_name = $_POST["user"];


// MySQL
//$user_name = mysql_real_escape_string($user_name);

// MySQLi
//$user_name = mysqli_real_escape_string($cnn, $user_name);

// MySQLi ООП
//$user_name = $db->real_escape_string($user_name);

// PostgreSQL
//$user_name = pg_escape_string($user_name);

// SQLite2
//$user_name = sqlite_escape_string($user_name);

// SQLite3
//$user_name = $db->escapeString($user_name);

//$sql = "INSERT INTO users(user_name) VALUES('$user_name')";


//$user_name = $pdo->quote($user_name);
//$sql = "INSERT INTO users(user_name) VALUES($user_name)";



// Выборка данных

//$sql = "SELECT id, user_name FROM users";

// MySQL
//$result = mysql_query($sql);

// MySQLi
//$result = mysqli_query($cnn, $sql);

// MySQLi ООП
//$result = $db->query($sql);

// PostgreSQL
//$result = pg_query($sql);

// SQLite2
//$result = sqlite_query($sql, $db);

// SQLite2 ООП
//$result = $db->query($sql);

// SQLite3
//$result = $db->query($sql);



//$stmt = $pdo->query($sql);

// Обработка ошибок
//$pdo->query($sql) or die('Ошибка в запросе!');

// Обработка результата
//$row = $stmt->fetch();

// PDO::FETCH_BOTH $row = $stmt->fetch(PDO::FETCH_NUM);
//$row = $stmt->fetch(PDO::FETCH_ASSOC);




// Обработка ошибок
//$pdo = new PDO("sqlite: test.db");

// Используем исключения $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
/*
try {
    // Что-то произошло
} catch(PDOException $e){
    $e->getCode() . ":" . $e->getMessage();
}
*/

// Используем предупреждения
//$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

// Не выводить никаких сообщений
//$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);

//echo $pdo->errorCode();
//print_r( $pdo->errorInfo() );




// Результат в виде объекта

//$sql = "SELECT id, user_name, email FROM users";
//
//$stmt = $pdo->query($sql);


// Приведение результата к объекту
/*$obj = $stmt->fetch(PDO::FETCH_OBJ);

echo $obj->id . "\n";
echo $obj->user_name . "\n";
echo $obj->email . "\n";*/


// Ленивое приведение
//$obj = $stmt->fetch(PDO::FETCH_LAZY);
//
//
//echo $obj[0] . "\n";
//echo $obj['user_name'] . "\n";
//echo $obj->email . "\n";

//print_r($row);



// Использование класса

//$sql = "SELECT id, user_name, email FROM users";
//$stmt = $pdo->query($sql);

//$obj = $stmt->fetch( PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE );



/*
class John_Smith {
    public $id, $user_name, $email;
}

$sql = "SELECT user_name, email, id, user_name FROM users";
$stmt = $pdo->query($sql);
$obj = $stmt->fetch( PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE );
$obj = $stmt->fetch( PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE );
$obj = $stmt->fetch( PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE );
$obj = $stmt->fetch( PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE );
$obj = $stmt->fetch( PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE );
$obj = $stmt->fetch( PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE );
*/


/*class User {
    public $id, $user_name, $email;
}
$sql = "SELECT id, user_name, email FROM users";
$stmt = $pdo->query($sql);
*/

//$obj = $stmt->fetchObject("User");
//$obj = $stmt->fetchObject();




// Полная выборка
//$sql = "SELECT id, user_name, email FROM users";
//$stmt = $pdo->query($sql);

// Получаем массив массивов
//$arr = $stmt->fetchAll(PDO::FETCH_ASSOC);

//
//class User {
//    public $id, $user_name, $email;
//}


// Получаем массив объектов класса User
//$arr = $stmt->fetchAll(PDO::FETCH_CLASS, 'User');


// Выбираем данные только из первого поля
//$arr = $stmt->fetchAll(PDO::FETCH_COLUMN, 1);


// Группируем значения второго поля по значению первого поля
//$arr = $stmt->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_GROUP);


// Используем функцию обратного вызова
/*
function foo($user_name, $email){
    return $user_name . ': '. $email . "\n";
}

$arr = $stmt->fetchAll(PDO::FETCH_FUNC, 'foo');
*/



// Подготовленные запросы (prepared statements)

// Именованные псевдопеременные
/*
$sql = 'SELECT email FROM users WHERE id = :id AND user_name = :user_name';
$stmt = $pdo->prepare($sql);


$stmt->execute( [':id' => 101, ':user_name' => 'John_Smith'] );
$arr = $stmt->fetchAll();


$stmt->execute( [':id' => 2, ':user_name' => 'Philip Fry'] );
$arr = $stmt->fetchAll();

*/


// Неименованные псевдопеременные
/*
$sql = 'SELECT email FROM users WHERE id = ? AND user_name = ?';
$stmt = $pdo -> prepare($sql);

$stmt -> execute( [101, 'John_Smith'] );
$arr = $stmt->fetchAll();

$stmt -> execute( [2, 'Philip Fry'] );
$philip = $stmt->fetchAll();
*/


/* Привязка параметров */
//$id = 101;
//$user_name = 'John_Smith';

// Для именованные псевдопеременныx
/*
$sql = 'SELECT email FROM users WHERE id = :id AND user_name = :user_name';
$stmt = $pdo->prepare($sql);

$stmt->bindParam(':id', $id, PDO::PARAM_INT);
$stmt->bindParam(':user_name', $user_name, PDO::PARAM_STR);
$stmt->execute();
$obj = $stmt->fetchAll();
*/


// Для неименованных псевдопеременныx
/*
$sql = 'SELECT email FROM users WHERE id = ? AND user_name = ?';
$stmt = $pdo->prepare($sql);

$stmt->bindParam(1, $id, PDO::PARAM_INT);
$stmt->bindParam(2, $user_name, PDO::PARAM_STR);

$obj = $stmt->execute();
$obj = $stmt->fetchAll();
*/




//Использование хранимых процедур

/*
$id = 1;
$name = 'John Smith';


$stmt = $pdo->prepare('CALL getEmail(?, ?, ?)');

// Параметр IN
$stmt->bindParam(1, $id, PDO::PARAM_INT);

// Параметр INOUT
$stmt->bindParam(2, $user_name, PDO::PARAM_STR|PDO::PARAM_INPUT_OUTPUT);

// Параметр OUT
$stmt->bindParam(3, $email, PDO::PARAM_STR);

$stmt->execute();
*/



// Использование транзакций

try {
    $pdo->beginTransaction();
    // Исполняем много запросов
    // Если все запросы исполнены успешно, то фиксируем это
    $pdo->commit();

}catch(PDOException $e) {

    // Если хотя бы в одном запросе произошла ошибка, откатываем всё назад

    $pdo->rollBack();
}

















print_r($obj);
?>

</pre>
