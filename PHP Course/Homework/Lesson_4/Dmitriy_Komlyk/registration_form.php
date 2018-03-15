<?php
$emailError = "";
$name = $surname= $email = $ticket = "";
$successMessage ="";
$today = date("d_m_Y");
$myFile;

    if (!empty($_POST)) {
      $name = trim($_POST["name"]);
      $surname = trim($_POST["surname"]);
      $email = trim($_POST["email"]);
      $ticket = $_POST["ticket"];
    }

    if( !($name=='') && !($surname=='') && !($email=='') && !($ticket=='')) { // Checking valid email.
        if (preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
               $myFile = fopen('registration_'.$today.'.txt', 'a+');
               if (strpos(file_get_contents('registration_'.$today.'.txt'), $email)){
                   echo $successMessage = "This email exists";
                   exit();
               }
               else {
                   fwrite($myFile, $name.','.$surname.','.$email.','.$ticket.'<br/>');
                   echo $successMessage = "Well done!";
                   exit();
               }
        } else  echo $emailError = "Invalid Email"; exit();
    }

?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>
<script>
    $(document).ready(function(){
        var form = $('#myForm');
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                surname: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                ticket: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "The 'Name' field is required."
                },
                surname: {
                    required: "The 'Surname' field is required."
                },
                email: {
                    required: "The 'Email' field is required.",
                    email: "Email format is not correct"
                },
                ticket: {
                    required: "The 'Ticket' field is required."
                }

            },
            submitHandler: function() {
                $.ajax({
                    url: "registration_form.php",
                    type: "POST",
                    data: $(form).serialize(),
                    success: function(data) {
                        $('.result').html(data);
                        $('.order').val('');

                    }
                });
            }
        });
    });
</script>
<style>
        .error {
            color: red;
        }
        h2 {
            background-color: #FEFFED;
            padding: 15px 35px;
            margin: -10px -50px;
            text-align:center;
            border-radius: 10px 10px 0 0;
        }
        div.container
        {
            width: 960px;
            height: 610px;
            margin:35px auto;
            font-family: 'Raleway', sans-serif;
        }
        div.main
        {
            width: 350px;
            padding: 10px 50px 30px;
            border: 2px solid gray;
            border-radius: 10px;
            font-family: raleway;
            float:left;
        }
        .order
        {
            width: 100%;
            height: 34px;
            padding-left: 5px;
            margin-bottom: 5px;
            margin-top: 5px;
            border: 2px solid #ccc;
            color: #4f4f4f;
            font-size: 16px;
            border-radius: 5px;
        }
</style>

<div class="container">
    <div class="main">
    <h2>Order</h2>
    <form id="myForm">
      <input class="order" type="text" name="name" placeholder="Name"></p>
      <input class="order" type="text" name="surname" placeholder="Surname"></p>
      <input class="order" type="email" name="email" placeholder="Email">
      <p><input type="radio" name="ticket" value="free">free
         <input type="radio" name="ticket" value="standart" checked>standart
         <input type="radio" name="ticket" value="premium">premium</p>
        <button type="submit" name="submit">Submit</button>
      <span class="result"></span>
    </form>
    </div>
</div>
