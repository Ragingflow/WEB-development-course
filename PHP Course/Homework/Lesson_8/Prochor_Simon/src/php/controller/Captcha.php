<?php

class Captcha {
    private $captcha_length = 6;
    private $code = '';
    private $img_handle = '';

    function __construct(){
        $this->drawCaptcha();
    }

    private function drawCaptcha() {
        $this->img_handle = @ImageCreate ( 120, 38 );
        @ImageColorAllocate ( $this->img_handle, 255, 255, 255 );

        for($i = 0; $i < $this->captcha_length; $i ++) {
            $x_axis = 30 + ($i * 10);
            $y_axis = 10 + rand ( 0, 7 );

            $color1 = rand ( 001, 150 );
            $color2 = rand ( 001, 150 );
            $color3 = rand ( 001, 150 );
            $txt_color [$i] = @ImageColorAllocate ( $this->img_handle, $color1, $color2, $color3 );

            $size = rand ( 3, 5 );

            $number = rand ( 0, 9 );
            $this->code .= "$number";

            ImageString ( $this->img_handle, $size, $x_axis, $y_axis, "$number", $txt_color [$i] );
        }
    }

    private function setSession() {
        session_start();
        $_SESSION["captcha"] = $this->code;
    }

    public function createCaptcha() {
        $this->setSession();

        header ( "Cache-Control: no-cache" );

        ob_start();
        ImagePng ( $this->img_handle );
        $imagedata = ob_get_contents();
        ob_end_clean();

        echo base64_encode($imagedata);
    }
}