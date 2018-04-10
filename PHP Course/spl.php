<pre>
<?php


// Standard PHP Library


// Интерфейс Serializable -  Интерфейс для индивидуальной сериализации.


/*
Serializable {

 abstract public string serialize ( void )
 abstract public void unserialize ( string $serialized )
}
*/

/*
class obj implements Serializable {
    private $data;

    public function __construct() {
        $this->data = "My private data";
    }

    public function serialize() {
        return serialize($this->data);
    }

    public function unserialize($data) {
        $this->data = unserialize($data);
    }

    public function getData() {
        return $this->data;
    }

}

$obj = new obj();

$ser = serialize($obj);
//var_dump($ser);

$newobj = unserialize($ser);


var_dump($newobj->getData());
*/





// Serializing child and parent classes:


class MyClass implements Serializable {
    private $data;

    public function __construct($data) {
        $this->data = $data;
    }

    public function getData() {
        return $this->data;
    }

    public function serialize() {
        echo "Serializing MyClass...\n";
        return serialize($this->data);
    }

    public function unserialize($data) {
        echo "Unserializing MyClass...\n";
        $this->data = unserialize($data);
    }
}


class MyChildClass extends MyClass {

    private $id;
    private $name;

    public function __construct($id, $name, $data) {
        parent::__construct($data);
        $this->id = $id;
        $this->name = $name;
    }


    public function serialize() {
        echo "Serializing MyChildClass...\n";
        return serialize(
                array(
                    'id' => $this->id,
                    'name' => $this->name,
                    'parentData' => parent::serialize()
                )
        );
    }


    public function unserialize($data) {
        echo "Unserializing MyChildClass...\n";

        $data = unserialize($data);

        $this->id = $data['id'];
        $this->name = $data['name'];

        parent::unserialize($data['parentData']);

    }


    public function getId() {
        return $this->id;
    }


    public function getName() {
        return $this->name;
    }

}


$obj = new MyChildClass(15, 'My class name', 'My data');


$serial = serialize($obj);

$newObject = unserialize($serial);


echo $newObject->getId() . PHP_EOL;
echo $newObject->getName() . PHP_EOL;
echo $newObject->getData() . PHP_EOL;





// __sleep() и __wakeup()


class Connection
{
    protected $link;
    private $dsn, $username, $password;

    public function __construct($dsn, $username, $password)
    {
        $this->dsn = $dsn;
        $this->username = $username;
        $this->password = $password;
        $this->connect();
    }

    private function connect()
    {
        $this->link = new PDO($this->dsn, $this->username, $this->password);
    }

    public function __sleep()
    {
        return array('dsn', 'username', 'password');
    }

    public function __wakeup()
    {
        $this->connect();
    }
}



?>
</pre>
