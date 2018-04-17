<?php

class AddToXML
{
    public function xml($name, $secondName, $email, $ticket)
    {


        spl_autoload_register(function ($class) {
            include $class . '.php';
        });


        $error = new Response();


        $time = date("d_m_Y");
        $xmlFile = "registration_".$time.".xml";
        $sxml = new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?>'.'<user></user>');
        $sxml->addAttribute('version', '1.0');


        if (!file_exists($xmlFile)) {
            $sxml->asXML($xmlFile);
        }


        if (strpos(file_get_contents('registration_' . $time . '.xml'), $email)) {
           $error->containerError = 'Email exists';
        } else {
            $sxml = simplexml_load_file($xmlFile);
            $user = $sxml->addChild("user");
            $user->addChild("firstname", $name);
            $user->addChild("secondname", $secondName);
            $user->addChild("email", $email);
            $user->addChild("ticket", $ticket);
            $sxml->asXML($xmlFile);
        }

        $error->testError();

    }
}