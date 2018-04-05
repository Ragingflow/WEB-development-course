<?php

/*
function getStock($param){
    return $param*100;
}
*/

class StockService {
    function getStock($param){

        if($param ==3) {
            throw new SoapFault('Server', "Product is absent");
        }

        return $param*100;
    }
}


// WSDL документ по умолчанию кешируется на 1 час.
// Поэтому во время отладки кеширование лучше отключить
//Отключение  кэширование  WSDL-документа
ini_set("soap.wsdl_cache_enabled","0");


//Создание  SOAP-сервера
$server = new SoapServer('http://php.local/soap/stock.wsdl');


//Добавление  функции  как  метод  SOAP-сервера
// $server->addFunction("getStock");

//Если нужно зарегестрировать сразу не сколько функций можно сделать это так
//$func_array = ['foo1', 'foo2'];
//$server->addFunctions($func_array);


$server->setClass('StockService');



//Обработка  SOAP-запроса
$server->handle();












