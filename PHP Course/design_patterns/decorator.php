<?php


// Decorator
/*
class eMailBody {
    private $header = 'This is email header';
    private $footer = 'This is email Footer';
    public $body = '';

    public function loadBody() {
        $this->body .= "This is Main Email body.<br>";
    }
}


class christmasEmail extends eMailBody {
    public function loadBody() {
        parent::loadBody();
        $this->body .= "Added Content for Xmas<br>";
    }
}

$christmasEmail = new christmasEmail();
$christmasEmail->loadBody();
echo $christmasEmail->body;



class newYearEmail extends eMailBody {
    public function loadBody() {
        parent::loadBody();
        $this->body .= "Added Content for New Year<br>";
    }
}

$newYearEmail = new newYearEmail();
$newYearEmail->loadBody();
echo $newYearEmail->body;
*/




interface eMailBody {
    public function loadBody();
}


class eMail implements eMailBody {
    public function loadBody() {
        echo "This is Main Email body.<br>";
    }
}

// Основной декоратор
abstract class emailBodyDecorator implements eMailBody {
    protected $emailBody;

    public function __construct(eMailBody $emailBody) {
        $this->emailBody = $emailBody;
    }

    abstract public function loadBody();
}



// Поддекоратор
class christmasEmailBody extends emailBodyDecorator {

    public function loadBody() {
        echo 'This is Extra Content for Christmas<br>';
        $this->emailBody->loadBody();
    }

}


class newYearEmailBody extends emailBodyDecorator {

    public function loadBody() {
        echo 'This is Extra Content for New Year.<br>';
        $this->emailBody->loadBody();
    }

}


/*
 *  Обычное письмо
 */

//$email = new eMail();
//$email->loadBody();

// Вывод
// This is Main Email body.


/*
 *  Письмо с поздравлениями с Рождеством
 */

//$email = new eMail();
//$email = new christmasEmailBody($email);
//$email->loadBody();

// Вывод
//This is Extra Content for Christmas
//This is Main Email body.



/*
 *  Письмо с поздравлениями к Новому Году
 */

//$email = new eMail();
//$email = new newYearEmailBody($email);
//$email->loadBody();

// Вывод
//This is Extra Content for New Year.
//This is Main Email body.



/*
 *  Письмо с поздравлениями с Рождеством и Новым Годом
 */

//$email = new eMail();
//$email = new christmasEmailBody($email);
//$email = new newYearEmailBody($email);
//$email->loadBody();




//This is Extra Content for New Year.
//This is Extra Content for Christmas
//This is Main Email body.




