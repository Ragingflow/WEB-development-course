<?php

/**
 * Description of TextFileManager
 *
 * @author yaroslav
 */
class TextFileManager {

    public $visitor;
    public $all_visitors;
    public $date;
    public $file;

    public function __construct($visitor) {
        $this->visitor = $visitor;
    }

    public function getFileName() {
        $this->date = new DateTime();
        $this->file = "./user_data/registration_" . $this->date->format("d_m_Y") . ".txt";
        return $this->file;
    }

    public function addNewVisitor() {
        if (file_exists($this->getFileName())) {
            $this->all_visitors = file_get_contents($this->getFileName());
            if (strpos($this->all_visitors, $this->visitor["email"])) {
                return false;
            }
        }
        mkdir("user_data");
        file_put_contents($this->getFileName(), implode(", ", $this->visitor) . "\n", FILE_APPEND);
        return true;
    }

}
