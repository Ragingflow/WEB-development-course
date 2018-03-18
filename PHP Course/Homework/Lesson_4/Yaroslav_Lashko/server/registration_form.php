<?php

$errors = [];
$errors[] = "The data is incorrect!";
$errors[] = "Such email already registered!";
$file = "./registration_" . date(d_m_Y) . ".txt";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (isset($_POST)) {
        $user_data = [];
        $user_data["name"] = filter_input(INPUT_POST, "name");
        $user_data["lastname"] = filter_input(INPUT_POST, "lastname");
        $user_data["email"] = filter_var(filter_input(INPUT_POST, "email"), FILTER_VALIDATE_EMAIL);
        $user_data["ticket"] = filter_input(INPUT_POST, "ticket");

        foreach ($user_data as $key => $value) {
            if (!$value) {
                die($errors[0]);
            }
            $user_data[$key] = trim(strip_tags($value));
        }
        $regExName = "/^[a-zA-Zа-яА-ЯёЁїЇєЄ']+-?[a-zA-Zа-яА-ЯёЁїЇєЄ']+?$/";
        $regExTicket = "/free|standart|premium/";

        if (preg_match($regExName, $user_data["name"]) && preg_match($regExName, $user_data["lastname"])) {
            $user_data["name"] = ucfirst($user_data["name"]);
            $user_data["lastname"] = ucfirst($user_data["lastname"]);
        } else {
            die($errors[0]);
        }
        if (!preg_match($regExTicket, $user_data["ticket"])) {
            die($errors[0]);
        }
    }
}

if (file_exists($file)) {
    $data = file_get_contents($file);
    if (strpos($data, $user_data["email"])) {
        die($errors[1]);
    }
}
file_put_contents($file, implode(", ", $user_data) . "\n", FILE_APPEND);
echo "success";
