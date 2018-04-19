<?php

if (!function_exists('config')) {

    function config($value) {
        $config = parse_ini_file(__DIR__ . '/../config/app.ini');
        return $config[$value];
    }

}

if (!function_exists('getFromTxt')) {

    function getFromTxt($email)
    {
        $dirname = config('database_dir');

        if (is_dir($dirname))
        {
            $dir = scandir($dirname, 0);

            foreach ($dir as $item)
            {
                if (is_file($dirname . $item))
                {
                    $file = fopen($dirname . $item, 'r');

                    while ($row = fgets($file)) {
                        $json = json_decode($row);
                        if ($json->email == $email) {
                            return true;
                        }
                    }

                    fclose($file);
                }
            }
        }

        return false;
    }

}

if (!function_exists('filterFormData')) {

    function filterFormData($data)
    {
        foreach ($data as $key => &$value)
        {
            $data[$key] = strip_tags($value);
            $data[$key] = trim($value);
        }

        return $data;
    }

}