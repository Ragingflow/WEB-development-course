<?php

class Validator {
    //Default name fields
    private static $email = 'email';
    private static $captcha= 'captcha';

    public static function validate_fields($fields, $errors=array()){

        if($fields['fields']) {
            foreach ($fields['fields'] as $key => $value) {
                if( isset($value) ) {
                    $errors = self::validate_optional($key, $value, $errors);
                }
            }

        }
        if($fields['required']) {
            foreach ($fields['required'] as $key) {
                if( isset($key) && isset($fields['fields'][$key]) ) {
                    $errors = self::validate_require($key, $fields['fields'][$key], $errors);
                }
            }
        }

        return $errors;

    }

    private static function validate_require($key, $value, $errors){
        if( !is_array($value) ) {
            $val = $value;
        } else {
            $val = $value['name'];
        }
        if( !isset($val) || strlen(trim($val)) === 0 ){
            if(!isset($errors[$key])) {
                $errors[$key] = array();
            }
            $errors[$key] = 'is required';
        }

        return $errors;
    }

    private static function validate_optional($key, $value, $errors){
        if( !is_array($value) ) {
            $val = $value;
        } else {
            $val = $value['name'];
        }

        if( isset($val) && strlen(trim($val)) != 0 ){
            if( $key == self::$email ) {
                $errors = self::validate_email($key, $value, $errors);
            }
            if( $key == self::$captcha ) {
                $errors = self::validate_captcha($key, $value, $errors);
            }
        }

        return $errors;
    }

    //DEFAULT FIELDS
    private static function validate_captcha($key, $value, $errors){

        session_start();
        if( $value != $_SESSION["captcha"]) {

            $errors[$key] = 'should be a valid captcha';
        }

        return $errors;
    }

    private static function validate_email($key, $value, $errors){

        if(!filter_var($value, FILTER_VALIDATE_EMAIL)){

            //if(!$errors[$key]) {
            //    $errors[$key] = array();
            //}
            $errors[$key] = 'should be a valid e-mail address';
        }

        return $errors;
    }


}