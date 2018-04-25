<?php

/**
 * Description of XMLFileManager
 *
 * @author yaroslav
 */
class XMLFileManager {

    public $visitor;
    public $date;
    public $file;

    public function __construct($visitor) {
        $this->visitor = $visitor;
    }

    public function getFileName() {
        $this->date = new DateTime();
        $this->file = "./user_data/registration_" . $this->date->format("d_m_Y") . ".xml";
        return $this->file;
    }
    
    protected function createXML() {
        $sxml = new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?>'
                . '<conference></conference>');
        return $sxml;
    }

    protected function createVisitor($sxml) {     
        $visitor = $sxml->addChild("visitor");
        $visitor->addChild("firstname", $this->visitor["name"]);
        $visitor->addChild("lastname", $this->visitor["lastname"]);
        $visitor->addChild("email", $this->visitor["email"]);
        $visitor->addChild("ticket", $this->visitor["ticket"]);
        $sxml->asXML($this->getFileName());
    }

    public function addNewVisitor() {
        if (file_exists($this->getFileName())) {
            $sxml = simplexml_load_file($this->getFileName());
            foreach ($sxml->visitor as $visitor) {
                if ($visitor->email == $this->visitor["email"]) {
                    return false;
                }
            }
            $this->createVisitor($sxml);
            return true;
        }
        mkdir("user_data");
        $this->createVisitor($this->createXML());
        return true;
    }

}
