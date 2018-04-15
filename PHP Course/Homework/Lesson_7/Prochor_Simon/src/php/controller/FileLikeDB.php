<?php
class FileLikeDB extends ByTicket {
    use kult_trait;

    public $errors = null;

    static $fileName = null;
    static $ticketDir = 'ticket';


    function __construct( $input ) {
        parent::__construct($input);
        self::$fileName = 'registration_'.date("d_m_Y").'.txt';

        $this->installDir();
    }

    private function installDir() {
        if(!is_dir( self::$ticketDir )) {
            mkdir( self::$ticketDir );
        }
    }

    public function addTicket(){
        $this->checkTicketByUser();

        if( $this->errors ) {
            return;
        }

        $file = self::$ticketDir .'/' . self::$fileName;

        $resources = fopen( $file, "a") or die('Error');
        fwrite($resources,  implode(",",$this->input ) .PHP_EOL );
        fclose($resources);
    }

    public function checkTicketByUser(){
        $file = self::$ticketDir .'/' . self::$fileName;

        if( file_exists( $file ) ) {
            $resources = file_get_contents( $file );

            if(strstr( $resources, $this->input['email']) != false) {
                $this->errors = [
                    'email' => 'this email already by a ticket'
                ];
                return;
            }
        }
    }
}