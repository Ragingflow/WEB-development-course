<?php

// Пространства имён (Namespaces)

// Разделитель - "/"
// Псевдоконстанта  - "__NAMESPACE__"


//Объявление пространства имён

/*
namespace MyModule;

const CONNECT_OK = 1;
class Connection {  }
function connect() {  }
*/


// Иерархия пространств имён
/*
namespace MyModule\Sub\Level;

const CONNECT_OK = 1;
class Connection {  }
function connect() {  }
*/


// Объявления в одном файле (не рекомендуется)
/*
namespace MyModule{
    const CONNECT_OK = 1;
    class Connection {  }
    function connect() {  }
}
// Никакого пространства между блоками!
namespace AnotherModule{
    const CONNECT_OK = 1;
    class Connection { }
    function connect() { }
}
*/

/*
namespace MyModule{
    const CONNECT_OK = 1;
    class Connection {  }
    function connect() { }
}
namespace{
//    Глобальное пространство имён
//    Здесь основной код
}
*/


// Правильно

// Файл MyModule.php
/*
 namespace MyModule;
/////
*/


// Файл AnotherModule.php
/*
 namespace AnotherModule;
/////
*/


//Файл index.php
require_once "MyModule.php";
require_once "AnotherModule.php";

// А это глобальное пространство имён
// Здесь наш код




// Объединение пространств имён

// Файл MyModule.php
/*
 namespace MyModule;
/////
*/


// Файл AnotherModule.php
/*
 namespace AnotherModule;
 require_once "MyModule.php";
/////
*/





?>









