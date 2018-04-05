<?php

try {
    //Создание  SOAP-клиента
    $client = new SoapClient('http://php.local/soap/stock.wsdl');
    //Получение  информации  о  методах  и  параметрах
    //var_dump($client->__getFunctions());

    $result = $client->getStock('7');
    echo "Price: " . $result;
} catch (SoapFault $exception){
    echo $exception->getMessage();
}
