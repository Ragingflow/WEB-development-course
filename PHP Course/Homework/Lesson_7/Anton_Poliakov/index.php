<?php

namespace Anton_Poliakov\App;

error_reporting(-1);
ini_set('display_errors', 'On');

spl_autoload_register(function ($class_name) {
    $path = explode('\\', $class_name);
    include implode('/', array_slice($path, 1)) . '.php';
    require_once __DIR__ . '/App/helpers.php';
});

$app = new App;
$data = $app->bootstrap();

?>

<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
  <title>Registration</title>
</head>
<body>

<div class="container">

  <div class="row">

    <div class="col-md-6 col-xs-12 col-sm-12 mx-auto mt-5">
      <h1 class="display-4 mb-4">Sign up</h1>
      <form id="register" action="" method="POST" enctype="multipart/form-data">
        <div class="form-group">
          <input type="text" class="form-control" id="firstname" name="firstname" aria-describedby="nameHelp" placeholder="First name"
              <?php echo 'value="' . (isset($data['firstname']) ? $data['firstname'] : '') . '"' ?>
                 required>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="secondname" name="lastname" aria-describedby="secondnameHelp" placeholder="Last name"
              <?php echo 'value="' . (isset($data['lastname']) ? $data['lastname'] : '') . '"' ?>
                 required>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email"
              <?php echo 'value="' . (isset($data['email']) ? $data['email'] : '') . '"' ?>
                 required>
            <?php echo (isset($data['errors']['email']) ? '<div class="error">' . $data['errors']['email'] . '</div>' : ''); ?>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="ticket" id="exampleRadios1" value="free" checked>
            <label class="form-check-label" for="exampleRadios1">
              Free
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="ticket" id="exampleRadios2" value="standard">
            <label class="form-check-label" for="exampleRadios2">
              Standard
            </label>
          </div>
          <div class="form-check disabled">
            <input class="form-check-input" type="radio" name="ticket" id="exampleRadios3" value="premium">
            <label class="form-check-label" for="exampleRadios3">
              Premium
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign up</button>
      </form>
    </div>

  </div>

</div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
<script src="app/js/app.js"></script>

<script>
  $('#register').validate();
</script>

</body>
</html>
