<?php

class Adapter
{

    public function saveData($chooseMethod)
    {




        if (!empty($_POST)) {
            $name = trim($_POST['name']);
            $secondName = trim($_POST['secondName']);
            $email = trim($_POST['email']);
            $ticket = trim($_POST['spam']);
        }

        switch ($chooseMethod) {
            case 'file':
                $saveToFile = new AddToFile();
                $saveToFile->file($name, $secondName, $email, $ticket);
                break;
            case 'dataBase':
                $saveToDB = new AddToDB();
                $saveToDB->dataBase($name, $secondName, $email, $ticket);
                break;
            case 'xml':
                $saveToXML = new AddToXML();
                $saveToXML->xml($name, $secondName, $email, $ticket);
                break;
        }
    }


}






