$(document).ready(function() {


    $('#search').focus();


    $('#findbook').submit(function(event) {
        event.preventDefault();
        var URL = "https://www.googleapis.com/books/v1/";
        var intitle = $('#search').val();
        var ajaxURL = URL + 'volumes?q=' + intitle;

        $.getJSON(ajaxURL, function (data) {

            var img,
                title,
                author,
                publishedDate,
                description,
                titleForOrder;



            $.each(data.items, function (i, items) {

                img = items.volumeInfo.imageLinks.smallThumbnail;
                title = items.volumeInfo.title;
                author = items.volumeInfo.authors;
                publishedDate = items.volumeInfo.publishedDate;


                //edit date format
                function dateFormat(publishedDate) {
                    if (publishedDate !==undefined){
                        var newPublishDate =  Date.parse(publishedDate).toString('dd.MM.yyyy')}
                        return newPublishDate;
                }
                // render order information
                var book = '<ul><li>';
                book += '<p>' + '<img src="' + img + '">' + '</p>';
                book += '<p>' + title + '</p>';
                book += '<p>' + author + '</p>';
                book += '<p>'+ dateFormat(publishedDate) + '</p>';
                book += '<p>'+ '<button id="'+i+'" class="order">To Order</button><br>' + '</p>';
                book += '</li></ul>';
                $('#bookList').append(book);
            });


            //Open Modal window
            $('button.order').click( function(event){
                event.preventDefault();
                $('#overlay').fadeIn(400,
                    function(){
                        $('#modal_form')
                            .css('display', 'block')
                            .animate({opacity: 1, top: '3%'}, 200);
                    });

                $("#description").empty();


                titleForOrder = $('<p class="title">' + data.items[$(this).attr("id")].volumeInfo.title + '</p>');
                var descriptionForOrder = data.items[$(this).attr("id")].volumeInfo.description;
                var imgForOrder = data.items[$(this).attr("id")].volumeInfo.imageLinks.smallThumbnail;

                if(descriptionForOrder !== undefined){
                    description = $(
                        '<img src="' + imgForOrder  + '">'
                        + '<p>' + descriptionForOrder + '</p>');
                    } else {
                    description = $('<img src="' + imgForOrder  + '">');
                    }

                    description.appendTo('#modal_form #description');
                    titleForOrder.appendTo('#order');
                    var img = $('<img src="' + imgForOrder  + '">');
                    img.appendTo('#order');

                 }); // end Open Modal window


                // mask for phone
                $("#tel").mask("+38(999) 999-9999");


                // Form validate
                $('#registration').validate({
                    rules: {
                        name: {
                            required:true,
                            minlength: 2
                        },
                        email: {
                            required:true,
                            email:true
                        },
                        tel: {
                            required:true,
                            pattern: '^\\+380\\d{3}\\d{2}\\d{2}\\d{2}$'
                        }
                    }, // end of rules
                    messages: {
                        name: {
                            required:"Enter your name",
                            minlength:"Use at least two characters"
                        },
                        email: {
                            required:"Enter your email",
                            email:"Enter correct email "
                        },
                        tel: {
                            required:"Enter your phone number",
                            pattern: "Enter correct phone number"
                        }
                    } // end of messages
                }); // end validate()

        });
    });




    $('#sendOrder').click( function(event) {
        event.preventDefault();

        var $inputName = $("input[name= 'name']");
        var $inputEmail = $("input[name='email']");
        var $inputPhone = $("input[id='tel']");


        var $name = $inputName.val();
        var $email = $inputEmail.val();
        var $phone = $inputPhone.val();

        var information = $('<p class="info">Имя:' +  $name + '</p>' +
            '<p class="info">Email:' + $email  + '</p>' +
            '<p class="info">Телефон:' +  $phone  + '</p>');

        information.appendTo('#order');

        //Clear order form
        $inputName.val('');
        $inputEmail.val('');
        $inputPhone.val('');



        $('#modal_form')
            .animate({opacity: 0, top: '3%'}, 200,
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
        $('#order').css('display','block');
    });

    //Close Modal window
    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '3%'}, 200,
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    }); // end Close Modal window

    $('#search').on('focus', function(){
        $("#bookList").empty();
    });

});