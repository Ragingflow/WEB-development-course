<?php

header('Content-type: application/json');

$host = $_SERVER['HTTP_HOST'];
$dir = dirname(__FILE__);

include_once( $dir. '/validator/index.php' );

if($_SERVER['REQUEST_METHOD'] !== 'POST' ){
    die('Error');
}


if(isset($_POST)){
    $input = $_POST;
}else {
    $body = file_get_contents('php://input');
    $input = array();
    parse_str($body, $input);
}


class ByTicket {
    private static $fileName = null;
    private static $ticketDir = 'ticket';
    private static $usersDir = 'users';
    private static $input = null;
    private static $errors = null;

    function __construct( $input ) {
        self::$fileName = 'registration_'.date("d_m_Y").'.txt';
        self::$input = $input;

        self::instalDir();
        self::validForm();

    }

    private static function validForm() {
        $fields = array(
            'fields' => self::$input,
            'required' => array(
                'email',
                'firstname',
                'lastname',
                'type',
            )
        );

        self::$errors = Validator::validate_fields( $fields );

        if( !empty( self::$errors ) ) {
            return;
        }
        self::checkUser();

    }

    private static function instalDir() {
        if(!is_dir(self::$ticketDir)) {
            mkdir(self::$ticketDir) ;
        }

        if(!is_dir(self::$usersDir)) {
            mkdir(self::$usersDir) ;
        }
    }

    private static function addTicket() {
        $fp = fopen( self::$ticketDir.'/'.self::$fileName, "a") or die('Error');

        $new_ticket_string = implode(", ", self::$input) . PHP_EOL;
        fwrite($fp, $new_ticket_string);

        fclose($fp);

        if( !$fp ) {
            self::$errors = [
                'email' => 'I cane Note create ticket'
            ];
        }
    }

    private static function createUser() {
        $users = fopen( self::$usersDir .'/users.txt', "a") or die('Error');
        fwrite($users,  self::$input['email'] .PHP_EOL );
        fclose($users);
        self::addTicket();
    }

    private static function checkUser() {
        if( file_exists( self::$usersDir .'/users.txt' ) ) {
            $users = file(self::$usersDir .'/users.txt');
            $key = array_search(self::$input['email'].PHP_EOL, $users);

            if( $key !== false) {
                self::$errors = [
                    'email' => 'this email already by a ticket'
                ];
                return;
            } else {
                self::createUser();
            }
        } else {
            self::createUser();
        }
    }

    public function get() {
        if( !empty(self::$errors ) ) {

            return [
                'errors' => self::$errors
            ];
        }

        return [
            'sucsess' => 'Thanks you!'
        ];
    }


}

$answer = new ByTicket( $input );

echo json_encode($answer->get());