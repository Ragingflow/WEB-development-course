<?php

class Response
{
    public $containerError = [];

    public function testError()
    {

        if (empty($this->containerError)) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'error'));
        };


    }

}