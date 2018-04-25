<pre>
<?php


// Standard PHP Library



// Интерфейс Iterator




/*
Iterator extends Traversable {
 mixed current ( void ) // Iterator::current — Возвращает текущий элемент
 scalar key ( void ) // Iterator::key — Возвращает ключ текущего элемента
 void next ( void ) // Iterator::next — Переходит к следующему элементу
 void rewind ( void ) // Iterator::rewind — Возвращает итератор на первый элемент
 boolean valid ( void ) // Iterator::valid — Проверка корректности позиции
}
*/


class MyIterator implements Iterator{
    private $var = [];

    public function __construct($array){
        if (is_array($array)) {
            $this->var = $array;
        }
    }

    public function rewind() {
        echo "rewinding<br />";
        reset($this->var);
    }

    public function current() {
        $var = current($this->var);
        echo "current: $var<br />";
        return $var;
    }

    public function key() {
        $var = key($this->var);
        echo "key: $var<br />";
        return $var;
    }

    public function next() {
        $var = next($this->var);
        echo "next: $var<br />";
        return $var;
    }

    public function valid() {
        $var = $this->current() !== false;
        echo "valid: {$var}<br />";
        return $var;
    }
}

// Передаем массив в конструктор класса MyIterator
$values = ['one', 'two', 'three'];

// Получаем объект Iterator
$it = new MyIterator($values);


foreach ($it as $key=>$value) {
    print "<hr>";
}














?>
</pre>
