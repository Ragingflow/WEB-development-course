<?php
class SqlLikeDB extends ByTicket {
    use kult_trait;

    public $errors = null;
    private $mysqli = null;


    function __construct( $input, $mysqli ) {
        parent::__construct($input);

        $this->mysqli = $mysqli;
    }


    public function addTicket(){
        $this->checkTicketByUser();

        if( $this->errors ) {
            return;
        }

        $this->createUser();

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
    }

    public function checkTicketByUser(){
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

    }
}