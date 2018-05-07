import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../node_modules/jquery-validation/dist/jquery.validate.min.js';

$(document).ready(function () {
    let $ticket_form = $("#ticket_form");
    let $message_cont = $(".message");
    let serverURL = "./server/registration.php";
    let captchaURL = "./server/gd2_captcha.php";
    let $captcha_img = $("#captcha_img");
    let $captcha = $("#captcha");
    let $refresh_captcha = $("#refresh_catcha");
    let messages = [];
    messages[0] = "The data is successfully sent to the server!";
    messages[1] = "Failed to send data to server. Please try again later.";

    let refreshCaptcha = () => {
        $captcha_img.attr("src", captchaURL + "?new_captcha=" + Math.random());
    };

    $refresh_captcha.click(function () {
        refreshCaptcha();
    });

    let message = (result) => {
        refreshCaptcha();
        let mess_type;
        if (result == "success") {
            result = messages[0];
            mess_type = "alert-success";
            $ticket_form.trigger("reset");
        } else {
            mess_type = "alert-danger";
            $captcha.val("");
        }
        return `<div class="alert ${mess_type}">
                    <strong>${result}</strong>
                </div>`;
    };

    $.validator.addMethod("only_letters", function (value, element) {
        return this.optional(element) || /^[a-zA-Zа-яА-ЯёЁїЇєЄ']+-?[a-zA-Zа-яА-ЯёЁїЇєЄ']+?$/.test(value);
    }, $.validator.format("Please enter the correct data"));

    $ticket_form.validate({
        submitHandler: function (form) {
            $.post(serverURL, $(form).serialize(), function (result, success) {
                if (success == "success") {
                    $message_cont.html(message(result));
                } else {
                    $message_cont.html(message(messages[1]));
                }
                $message_cont.fadeIn().fadeOut(3000);
            });
        },
        rules: {
            name: {
                required: true,
                only_letters: true,
                minlength: 2,
                maxlength: 20
            },
            lastname: {
                required: true,
                only_letters: true,
                minlength: 2,
                maxlength: 20
            },
            email: {
                required: true,
                email: true
            },
            ticket: {
                required: true
            },
            captcha: {
                required: true
            }
        },
        messages: {
            name: {
                only_letters: "Please enter only letters."
            }
        }
    });
});