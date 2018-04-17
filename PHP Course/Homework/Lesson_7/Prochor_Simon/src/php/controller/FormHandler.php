<?php
class FormHandler {
    use kult_trait;

    public $input = null;
    public $errors = null;

    function __construct( ) {
        if(isset($_POST)){
            $this->input = $_POST;
        }else {
            $body = file_get_contents('php://input');
            parse_str($body, $this->input);
        }

        $this->validate();
    }

    private function validate() {
        $this->errors = Validator::validate_fields( array(
            'fields' => $this->input,
            'required' => array(
                'email',
                'firstname',
                'lastname',
                'type',
            )
        ) );
    }
}