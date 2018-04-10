<pre>
<?php


// Standard PHP Library



// Интерфейс IteratorAggregate -  это интерфейс для создания внешнего итератора.


// Основы использования
/*
class myData implements IteratorAggregate {
    public $property1 = "Public property one";
    public $property2 = "Public property two";
    public $property3 = "Public property three";

    public function __construct() {
        $this->property4 = "last property";
    }

    public function getIterator() {
        return new ArrayIterator($this);
    }
}

$obj = new myData();

foreach ($obj as $key=>$value){
    var_dump($key, $value);
    echo "\n";
}*/


class MyIterator implements Iterator{
    private $var = [];
    private $count = 0;

    public function __construct(array $array){
        $this->var = $array;
        $this->count = count($array);
    }

    public function rewind() {
        reset($this->var);
    }

    public function current() {
        $this->count--;
        return date("d-m-Y", current($this->var));
    }

    public function key() {
        return key($this->var);
    }

    public function next() {
        return next($this->var);
    }

    public function valid() {
        return $this->count !== 0;
    }
}


class MySchedule implements IteratorAggregate {

    private $items = [];

    public function getIterator()
    {
        asort($this->items);
       return new MyIterator($this->items);
    }

    public function add($key, $value) {
        $this->items[$key] = $value;
    }

}


$shedule = new MySchedule();

$shedule->add('PHP', mktime(0,0,0, 3, 20, 2018));
$shedule->add('HTML', mktime(0,0,0, 3, 20, 2018));
$shedule->add('XML', mktime(0,0,0, 3, 20, 2018));
$shedule->add('Java', mktime(0,0,0, 3, 20, 2018));
$shedule->add('C#', mktime(0,0,0, 3, 20, 2018));
$shedule->add('Ajax', mktime(0,0,0, 3, 20, 2018));
$shedule->add('Javascript', mktime(0,0,0, 3, 20, 2018));


foreach ($shedule as $key=>$value){
    echo "$key : $value\n";
}
















?>
</pre>
