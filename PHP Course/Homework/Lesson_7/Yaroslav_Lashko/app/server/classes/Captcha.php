<?php

/**
 * Description of Captcha
 *
 * @author yaroslav
 */
class Captcha {

    private static $symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZzyxwvutsrqponmlkjihgfedcba0123456789";
    private static $count_symbols = 6;
    private static $captcha_symbols;

    private static function setSession() {
        session_start();
        $_SESSION["captcha"] = self::$captcha_symbols;
        session_destroy();
    }

    private static function randSymbols() {
        return substr(str_shuffle(self::$symbols), 0, self::$count_symbols);
    }

    private static function randColors($captcha_img) {
        return imagecolorallocate($captcha_img, rand(0, 170), rand(0, 170), rand(0, 170));
    }

    public static function createCaptcha() {
        header('Content-Type: image/jpeg');

        self::$captcha_symbols = self::randSymbols();

        $captcha_img = imagecreatetruecolor(180, 50);

        $bg_color = imagecolorallocate($captcha_img, 220, 220, 220);

        $line_color = imagecolorallocate($captcha_img, 150, 150, 150);

        imagefill($captcha_img, 0, 0, $bg_color);

        $fontfile = "./fonts/arial.ttf";

        for ($i = 0, $x = 0; $i < self::$count_symbols; $i++) {
            imageTtftext($captcha_img, rand(18, 25), rand(-30, 30), $x += 22, rand(32, 38), self::randColors($captcha_img), $fontfile, self::$captcha_symbols[$i]);
            imageline($captcha_img, rand(3, 15), rand(3, 48), rand(150, 178), rand(3, 48), $line_color);
        }

        imagejpeg($captcha_img);
        imagedestroy($captcha_img);

        self::setSession();
    }

}
