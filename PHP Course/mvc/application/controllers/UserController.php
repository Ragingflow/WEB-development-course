<?php
class UserController implements IController {
  public function helloAction() {
    $fc = FrontController::getInstance();
    //Добавляем
    $params = $fc->getParams();
    $view = new View();
    $view->name = $params['name'];
    $result = $view->render('../views/user.php');

    $fc->setBody($result);
  }
}
