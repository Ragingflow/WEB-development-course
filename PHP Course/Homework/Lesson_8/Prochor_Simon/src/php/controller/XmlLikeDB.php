<?php
class XmlLikeDB extends ByTicket {
    use kult_trait;

    public $errors = null;

    static $fileName = null;
    static $ticketDir = 'ticket';


    function __construct( $input ) {
        parent::__construct($input);
        self::$fileName = 'registration_'.date("d_m_Y").'.xml';

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

        $sxml = simplexml_load_file( $file );


        $item = $sxml->addChild("item");

        foreach ( $this->input as $k => $v ) {
            $item->addChild( $k, $v );
        }

        $sxml->asXML($file);
    }

    private function createFile() {
        $file = self::$ticketDir .'/' . self::$fileName;

        $xml    =   new DomDocument('1.0','utf-8');
        $tickets  =   $xml->appendChild($xml->createElement('tickets'));



        $xml->formatOutput = true;
        $xml->save( $file );
    }

    public function checkTicketByUser(){
        $file = self::$ticketDir .'/' . self::$fileName;

        if( file_exists( $file ) ) {
            $sxml = simplexml_load_file( $file );
            $array =  json_decode( json_encode($sxml), true );

            if( !isset($array['item']['dbtype']) ) {
                $key = array_search( $this->input['email'], array_column($array['item'], 'email'));
            } else {
                $key = array_search( $this->input['email'], $array['item']);
            }


            if( $key !== false) {
                $this->errors = [
                    'email' => 'this email already by a ticket'
                ];
                return;
            }
        } else {
            $this->createFile();
        }
    }
}