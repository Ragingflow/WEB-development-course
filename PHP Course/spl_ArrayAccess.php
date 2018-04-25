<pre>
<?php


// Standard PHP Library



// Интерфейс ArrayAccess -  обеспечивает доступ к объектам как к массиву.

/*
abstract public boolean offsetExists(mixed $offset) — существует ли значение по заданному ключу;
abstract public mixed offsetGet(mixed $offset) — получить значение по индексу;
abstract public void offsetSet(mixed $offset, mixed $value) — установить значение с указанием индекса;
abstract public void offsetUnset(mixed $offset) — удалить значение.
*/


class obj implements ArrayAccess {

    private $container = [];


     public function __construct() {

         $this->container = [
             "one" => 1,
             "two" => 2,
             "three" => 3,
         ];
     }


    public function offsetSet($offset, $value) {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }


    public function offsetExists($offset) {
        return isset($this->container[$offset]);
    }


    public function offsetUnset($offset) {
        unset($this->container[$offset]);
    }

    public function offsetGet($offset) {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }


}


$obj = new obj();


var_dump(isset($obj['two']));
var_dump($obj['two']);
unset($obj['two']);
var_dump(isset($obj['two']));
$obj["two"] = "A value";
var_dump($obj['two']);


$obj[] = 'Append 1';
$obj[] = 'Append 2';
$obj[] = 'Append 3';


print_r($obj);







?>
</pre>
