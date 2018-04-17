<?php

/**
 * Description of Validator
 *
 * @author yaroslav
 */
class Validator {

    public $visitor = [];
    public $regExName = "/^[a-zA-Zа-яА-ЯёЁїЇєЄ']+-?[a-zA-Zа-яА-ЯёЁїЇєЄ']+?$/";
    public $regExTicket = "/free|standart|premium/";

    public function __construct() {
        $this->visitor["name"] = filter_input(INPUT_POST, "name");
        $this->visitor["lastname"] = filter_input(INPUT_POST, "lastname");
        $this->visitor["email"] = filter_var(filter_input(INPUT_POST, "email"), FILTER_VALIDATE_EMAIL);
        $this->visitor["ticket"] = filter_input(INPUT_POST, "ticket");
    }

    public function checkEmpty() {
        foreach ($this->visitor as $key => $value) {
            if (!$value) {
                return false;
            }
            $this->visitor[$key] = trim(strip_tags($value));
        }
        return true;
    }

    public function checkName() {
        if (!preg_match($this->regExName, $this->visitor["name"]) &&
                !preg_match($this->regExName, $this->visitor["lastname"])) {
            return false;
        }
        $this->visitor["name"] = ucfirst($this->visitor["name"]);
        $this->visitor["lastname"] = ucfirst($this->visitor["lastname"]);
        return true;
    }

    public function checkTicket() {
        if (!preg_match($this->regExTicket, $this->visitor["ticket"])) {
            return false;
        }
        return true;
    }

    public function validate() {
        if ($this->checkEmpty() && $this->checkName() && $this->checkTicket()) {
            return $this->visitor;
        }else{
            return false;
        }
    }

}
