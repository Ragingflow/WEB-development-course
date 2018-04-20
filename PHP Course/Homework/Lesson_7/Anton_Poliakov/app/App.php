<?php

//namespace Anton_Poliakov\App;

class App
{
    public $data;

    public $method;

    public function __construct()
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->data = $_POST;
    }

    public function bootstrap()
    {
        return $this->request($this->data);
    }

    public function request($data)
    {
        $store = new Store;

        if ($this->method === 'POST') {

            switch (config('database')) {
                case 'xml':
                    return $store->storexml(
                        filterFormData($data)
                    );
                    break;
                case 'mysql':
                    return $store->storemysql(
                        filterFormData($data)
                    );
                    break;
                case 'txt':
                    return $store->storetxt(
                        filterFormData($data)
                    );
                default;
            }
        }
    }
}