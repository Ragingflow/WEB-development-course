<?php

class AddToFile
{

    public function file($name, $secondName, $email, $ticket)
    {
        spl_autoload_register(function ($class) {
            include $class . '.php';
        });

        $error = new Response();
        $time = date("d_m_Y");


// array for error message
        $containerError = [];


        if (!empty($name) && !empty($secondName) && !empty($email) && !empty($ticket)) {
            $userData = fopen('registration_' . $time . '.txt', 'a+');
            if (strpos(file_get_contents('registration_' . $time . '.txt'), $email)) {
                $error->containerError = 'Email exists';

            } else {
                $user = "Name: " . $name . " " . "Second Name: " . $secondName . " " . "Email: " . $email . " " . "Ticket: " . $ticket . "<br>\n";
                fwrite($userData, $user);

                fclose($userData);

            };
        };


        $error->testError();
    }
}
