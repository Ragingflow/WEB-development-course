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


// Правила доступа

// Unqualified name
/*
namespace MyModule;

const E_ALL = 100;

echo E_ALL; // Локальная константа
echo \E_ALL; // Глобальная константа
*/


// Qualified name
/*
require_once "MyModule.php";


echo MyModule\E_ALL; // Константа из MyModule
echo \E_ALL; // Глобальная константа
*/


// Fully qualified name
/*
require_once "MyModule.php";

echo  \MyModule\E_ALL; // Константа из MyModule
echo \E_ALL; // Глобальная константа
*/



// Импорт и псевдонимы


namespace Foo;

// Здесь подключаются все необходимые файлы (include)

use My\Full1\Classname;
use My\Full2\Classname as Bar;
use \ArrayObject; // импорт глобального класса
use My\Full\NSname;

use A\B\C;
new C();
C\foo();


class Bar {  }



$obj = new Bar(); // объект класса My\Full2\Classname а не текущего namespace

$obj =  new namespace\Bar();

NSname\subns\func();

$obj = new ArrayObject(array(1)); // глобальный ArrayObject













?>









