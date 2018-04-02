<?php

define('DATABASE_DIR', 'database/');

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
    if (!isCreated($_POST['email'])) {
        store(filterFormData($_POST));
    }

    header("Location: " . '/');
    exit;
}

function filterFormData($data)
{
    foreach ($data as $key => &$value)
    {
        $data[$key] = strip_tags($value);
        $data[$key] = trim($value);
    }

    return $data;
}

function store($data)
{
    if (!is_dir(DATABASE_DIR)) {
        mkdir(DATABASE_DIR);
    }

    $storage = fopen(DATABASE_DIR . 'registration_' . date('d_m_y', time()) . '.txt', 'a+'
    ) or die('Can\'t create storage file.');

    fwrite($storage, json_encode($data) . "\n");

    fclose($storage);
}

function isCreated($email)
{
    if (is_dir(DATABASE_DIR))
    {
        $dir = scandir(DATABASE_DIR, 0);

        foreach ($dir as $item)
        {
            if (is_file(DATABASE_DIR . $item))
            {
                $file = fopen(DATABASE_DIR . $item, 'r');

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