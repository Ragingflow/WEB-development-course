<?php
header('Content-type: application/json');

if($_SERVER['REQUEST_METHOD'] !== 'POST' ) die('Error its not POST');

include_once 'config.php';

function __autoload($cl_name){
    include "controller/$cl_name.php";
}

trait kult_trait {
    function check_errors(  ) {
        if( !empty($this->errors ) ) {
            return  ['errors' => $this->errors] ;
        }
        return false;
    }
}

abstract class ByTicket {
    protected $input;


    function __construct( $input ) {
        $this->input = $input;
    }

    abstract function addTicket();
    abstract function checkTicketByUser();
}


//-----

$form = new FormHandler();

if( $errors = $form->check_errors() ) {
    echo json_encode( $errors );
    die();
}

switch ($form->input['dbtype']) {
    case 'txt':
        $newTicket = new FileLikeDB( $form->input );
        break;
    case 'sql':
        $db = new DbClass();

        if( $errors = $db->check_errors() ) {
            echo json_encode( $errors );
            die();
        }

        $db->connectDb();

        $newTicket = new SqlLikeDB( $form->input, $db->mysqli );
        break;
    default:
        $newTicket = new XmlLikeDB( $form->input );
        break;
}


$newTicket->addTicket();

if( $errors = $newTicket->check_errors() ) {
    echo json_encode( $errors );
    die();
}

echo json_encode( ['sucsess' => 'Thanks you!'] );


