<pre>
<?php


// Standard PHP Library




// Класс Generator
/*
function numbers() {
    echo "START\n";

    for($i=0; $i<5; $i++){
        yield $i;
    }
    echo "FINISH\n";
}


$x = numbers();

foreach ($x as $value) {
    echo "Value: $value";
}
*/


/*
Generator implements Iterator {
 public mixed current ( void )
 public mixed getReturn ( void )
 public mixed key ( void )
 public void next ( void )
 public void rewind ( void )
 public mixed send ( mixed $value )
 public mixed throw ( Throwable $exception )
 public bool valid ( void )
 public void __wakeup ( void )
}
*/



// Возврат ключей?
/*
function gen() {
    yield 'a';
    yield 'b';
    yield 'name' => 'John';
    yield 'd';
    yield 10 => 'e';
    yield 'f';
}


foreach (gen() as $key => $value) {
    echo "$key : $value\n";
}
*/

/*
function echoLogger() {
    while (TRUE) {
        echo 'Log: ' . yield . "<br>";
    }
}


$logger = echoLogger();

$logger->send('Foo');
$logger->send('Bar');
*/



// Комбинируем возврат и приём значений
/*
function numbers() {
    $i = 0;
    while (TRUE) {
        $cmd = (yield $i);
        ++$i;
        if ($cmd == 'stop') {
            return; // Выход из цикла
        }
    }
}

$gen = numbers();
foreach ($gen as $item) {
    if($item == 3) {
        $gen->send('stop');
    }
    echo $item;

}
*/



// Главное преимущество генераторов - это их простота

function getLinesFromFile($fileName) {
    if (!$fileHandle = fopen($fileName, 'r')) {
        return;
    }

    while (false !== $line = fgets($fileHandle)) {
        yield $line;
    }

    fclose($fileHandle);
}



class LineIterator implements Iterator {
    protected $fileHandle;

    protected $line;
    protected $i;

    public function __construct($fileName) {
        if (!$this->fileHandle = fopen($fileName, 'r')) {
            throw new RuntimeException('Couldn\'t open file "' . $fileName . '"');
        }
    }

    public function rewind() {
        fseek($this->fileHandle, 0);
        $this->line = fgets($this->fileHandle);
        $this->i = 0;
    }

    public function valid() {
        return false !== $this->line;
    }

    public function current() {
        return $this->line;
    }

    public function key() {
        return $this->i;
    }

    public function next() {
        if (false !== $this->line) {
            $this->line = fgets($this->fileHandle);
            $this->i++;
        }
    }

    public function __destruct() {
        fclose($this->fileHandle);
    }
}


















?>
</pre>
