<?php
include_once './config.php';
include_once './validator/index.php';

header('Content-type: application/json');



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
    private $mysqli;
    private $input = null;
    private $errors = null;
    private $userid = null;

    function __construct( $input ) {
        $this->input = $input;

        $this->connectDb();
        $this->validForm();
    }

    private function connectDb() {
        $this->mysqli = new mysqli( DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE );

        if( !empty($this->mysqli->connect_error) ) {
            $this->errors = "Connection failed: " . $this->mysqli->connect_error;
        }
    }

    private function validForm() {
        $fields = array(
            'fields' => $this->input,
            'required' => array(
                'email',
                'firstname',
                'lastname',
                'type',
            )
        );

        $this->errors = Validator::validate_fields( $fields );

        if( !empty( $this->errors ) ) {
            return;
        }
        $this->checkTicketByUser();
    }


    private function addTicket() {

        $sql = "INSERT INTO orders (id, user, type, date) 
                     VALUES (NULL, '{$this->userid}', '{$this->input['type']}', NOW() )";

        $query = $this->mysqli->query($sql);

        if( !$query ) {
            $this->errors = [
                'email' => 'I cane Note create ticket'
            ];
        }
    }

    private function createUser() {
        $sql = "INSERT INTO users (id, firstname, lastname, email) 
                     VALUES (
                                    NULL, 
                                    '{$this->input['firstname']}', 
                                    '{$this->input['lastname']}', 
                                    '{$this->input['email']}'
                                    )";

        $this->mysqli->query($sql);

        $this->userid = $this->mysqli->insert_id;

        $this->addTicket();
    }

    private function checkTicketByUser() {
        $sql = "SELECT * FROM orders INNER JOIN users ON orders.user = users.id WHERE email LIKE '{$this->input['email']}'";

        $user = $this->mysqli->query($sql);

        if( $user->num_rows > 0 ) {
            $query = $user->fetch_array(MYSQLI_ASSOC);
            $date = date("j F \a\\t h:i:s A", strtotime($query['date']));

            $this->errors = [
                'email' => 'this user already by a ticket in '. $date
            ];

            return;
        }

        $this->createUser();

    }

    public function get() {
        if( !empty($this->errors ) ) {

            return [
                'errors' => $this->errors
            ];
        }

        return [
            'sucsess' => 'Thanks you!'
        ];
    }


}

$answer = new ByTicket( $input );

echo json_encode($answer->get());