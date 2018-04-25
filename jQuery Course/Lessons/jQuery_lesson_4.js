$(document).ready(function() {


    // Improving Navigation

    // Determining a Link’s Destination
    // $('a[href^="http://"]').each(function() {
    //     var href = $(this).attr('href');
    //     href = href.replace('http://','');
    //     $(this).after(' (' + href + ')');
    // });


    // Opening External Links in a New Window
    // var myURL = location.protocol + '//' + location.hostname;
    // $('a[href^="http://"]').not('[href^="'+myURL+'"]').attr('target','_blank');


    // Creating New Windows
    // open(URL, name, properties)

    var newWin;
    $('#banner').click(function () {
        newWin = open('http://www.google.com/', 'theWin', 'height=400,width=400,left=300,top=300');
    })



    $('a').click(function () {
        //var newWin = open('http://ua.fm/', 'theWin', 'height=400,width=400,left=300,top=300');
        newWin.close();

        // Use the window reference
        // close()
        // blur()
        // focus()
        // moveBy() newWin.moveBy(200,300);
        // moveTo() moveTo(0,0);
        // resizeBy() resizeBy(100,200);
        // resizeTo()
        // scrollBy() // scrollBy(100,200);
        // scrollTo() // scrollTo(100,200);
    })



    // Enhancing Web Forms


    // Selecting Form Elements



    // <input name="user" type="text" id="user">  -  var userField = $('#user');

    // :input
    // :text
    // :password
    // :radio
    // :checkbox
    // :submit
    // :image // Select all image buttons.
    // :reset
    // :button
    // :file
    // :hidden



    // var fieldValue = $('#username').val();


    // $('#username').val('new value');

    // :checked
    // $('#signup').submit(function() {
    //     console.log($('input:checked'));
    //     return false;
    // });


    // :selected
    // $('#signup').submit(function() {
    //     console.log($('select :selected').val());
    //     return false;
    // });


    // Determining Whether Buttons and Boxes Are Checked

    // <input type="checkbox" name="news" id="news" checked="checked" />
    // <input type="checkbox" name="news" id="news" checked>

    // $('#signup').submit(function() {
    //     if ($('#pickle').prop( "checked" )) {
    //         alert('Pickle checked');
    //     }
    //     return false;
    // });

    // $('#signup').submit(function() {
    //     if ($('#pickle').is( ":checked" )) {
    //         alert('Pickle checked');
    //     }
    //     return false;
    // });


    // Form Events

    // $('#signup').submit(function() {
    //     if ($('#username').val() == '') {
    //         alert('Please supply a name in the Name field.');
    //         return false;
    //     }
    // });


    // Focus
    // $('#username').focus(function() {
    //     var field = $(this);
    //     if (field.val()=='default value') {
    //         field.val('');
    //     }
    // });


    // Blur
    // $('#username').blur(function() {
    //     var fieldValue=$(this).val();
    //     if (!fieldValue) {
    //         alert('Please add Name');
    //     }
    // });


    // Click
    // $(':radio').click(function() {
    //     //function will apply to every radio button when clicked
    //     alert($(this).val());
    // });


    // Change
    // $('#planet').change(function() {
    //     if ($(this).val()!='Earth') {
    //         alert('You are alien');
    //     }
    // });



    // Adding Smarts to Your Forms
    // $('#signup :text:first').focus();


    // Disabling and Enabling Fields

    // jQuery 1.6+
    // $("input").prop('disabled', true);
    // $("input").prop('disabled', false);

    // jQuery 1.5 and below
    // $("input").attr('disabled','disabled');
    // $("input").removeAttr('disabled');

    // if ($('#planet').val()=='Earth') {
    //     $('#heliskiing').prop('disabled', true);
    // }
    //
    // $('#planet').change(function() {
    //     if ($(this).val()=='Earth') {
    //         $('#heliskiing').prop('disabled', true);
    //     }
    //     else {
    //         $('#heliskiing').prop('disabled', false);
    //     }
    // });


    // Stopping Multiple Submissions

/*    $('#signup').submit(function() {
        var subButton = $(this).find(':submit');
        subButton.prop('disabled', true);
        subButton.val('...sending information');
        return false;
    });*/


    // Hiding and Showing Form Options
    // if ($('#planet').val()=='Earth') {
    //     $('#heliskiing, label[for=heliskiing]').hide();
    // }
    //
    // $('#planet').change(function() {
    //     if ($(this).val()=='Earth') {
    //         $('#heliskiing, label[for=heliskiing]').hide();
    //     }
    //     else {
    //         $('#heliskiing, label[for=heliskiing]').show();
    //     }
    // });


    // Form Validation


    // jQuery Validation Plug-in


    // $('#signup').validate();

    //  class="required"
    // date  - MM/DD/YYYY  <input name="dob" type="text" class="required date" title="Please enter a date in the format 01/28/2009.">
    // url
    // email
    // number  Must be a number like 32 or 102.50 or even –145.5555. However, the input can’t include any symbols, so $45.00 and 100,000 are invalid.
    // digits
    // creditcard


    // Adding error messages


    // Advanced Validation


    // $('#signup').validate({
    //     rules: {
    //         username: 'required',
    //         email: {
    //             required:true,
    //             email:true
    //         },
    //         birthdate: {
    //             date:true,
    //             required:true
    //         }
    //     }
    // });


// minlength. The field must contain at least the specified number of characters.
// maxlength. The field must contain no more than the specified number of characters.
// rangelength. A combination of both minlength and maxlength. Specifies both the minimum and maximum number of characters allowed in a field. F rangelength:[6,100]
// min. Requires that the field contain a number that’s equal to or greater than the specified number.
// max. Like min, but specifies the largest number the field can contain.
// range. Combines min and max to specify both the smallest and largest numbers that the field must contain. range:[10,1000]
// equalTo. Requires that a field’s contents match another field. For example, on a sign-up form, it’s common to ask a visitor to enter a password and then verify that password by typing it a second time. equalTo: '#password'


    // $('#signup').validate({
    //     rules: {
    //         password: {
    //             required:true,
    //             rangelength:[8,16]
    //         },
    //         confirm_password: {
    //             equalTo:'#password'
    //         }
    //     }
    // }); // end validate()


    // Advanced error messages


    // $('#signup').validate({
    //     rules: {
    //         password: {
    //             required:true,
    //             rangelength:[8,16]
    //         },
    //         confirm_password: {
    //             equalTo:'#password'
    //         }
    //     }, // end of rules
    //     messages: {
    //         password: {
    //             required: "Please type the password you'd like to use.",
    //             rangelength: "Your password must be between 8 and 16 characters long."
    //         },
    //         confirm_password: {
    //             equalTo: "The two passwords don't match."
    //         }
    //     } // end of messages
    // }); // end validate()


    // Custom rule creation
    // jQuery.validator.addMethod("greaterThanZero", function(value, element) {
    //         return this.optional(element) || (parseFloat(value) > 0);
    // });
    //
    // $('validatorElement').validate({
    //     rules : {
    //         amount : { greaterThanZero : true }
    //     }
    // });


    // Validating with the Server

    $('#signup').validate({
        rules: {
            username: {
                required: true,
                remote: 'assets/check_username.php'
            }
        },
    });



        console.log();

}); // document ready end

