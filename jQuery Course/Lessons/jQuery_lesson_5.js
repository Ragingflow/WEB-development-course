$(document).ready(function() {


   // Expanding Your Interface


    // The jQuery UI Project
    // $( "#username" ).datepicker();


    // Determining the Size and Position of Page Elements

    // .height()
    // .width()


    // var winH = $(window).height();
    // var winW = $(window).width();

    // var docH = $(document).height();
    // var docW = $(document).width();

    // var divW = $('#banner').width();
    // var divH = $('#banner').height();

    // innerWidth() returns the width + the left and right padding;
    // innerHeight() returns the CSS height + top and bottom padding:

    // var divW = $('#banner').innerWidth();
    // var divH = $('#banner').innerHeight();


    // outerWidth() returns the width + the left and right padding + left and right borders;
    // outerHeight() returns the CSS height + top and bottom padding + top and bottom borders:

    // var divW = $('#banner').outerWidth();
    // var divH = $('#banner').outerHeight();

    // var divW = $('#banner').outerWidth(true);
    // var divH = $('#banner').outerHeight(true);


    // Determining the Position of Elements on a Page

    // offset()

    // var imagePosition = $('#banner').offset();
    //
    // imagePosition.top // number of pixels from the top of the document
    // imagePosition.left // number of pixels from the left edge of the document

    // $('#caption').css({
    //     'position' : 'absolute',
    //     'left' : imagePosition.left,
    //     'top' : imagePosition.top
    // });


    // position()
    // $('.banner-slogan').position()

    // $('.banner-slogan').offset({
    //     left : 100,
    //     top : 200
    // });


    // Determining a Page’s Scrolling Position
    // .scrollTop()
    // .scrollLeft()




    // Ajax: Communication with the Web Server

    // Asynchronous JavaScript and XML


    // Ajax the jQuery Way


    // Using the load() Function
    // $('#banner').click(function () {
    //     //$(this).load('jQuery_lesson_5.html');
    //     $(this).load('jQuery_lesson_5.html #gallery');
    // });


    // The get() and post() Functions
    //
    // $.get(url, data, callback);
    // $.post(url, data, callback);


    // $.get('rateMovie.php','rating=5&user=Bob');
    // $.get('rateMovie.php','favFood=Mac & Cheese' );
    // $.get('rateMovie.php','favFood=Mac%20%26%20Cheese' );
    //
    // ' ' = %20
    // '&' = %26


    // console.log(encodeURIComponent('Mac & Cheese'));

    // console.log(decodeURIComponent('Mac%20%26%20Cheese'));


    // var queryString = 'favFood=' + encodeURIComponent('Mac & Cheese');
    // $.post('foodChoice.php', queryString);

    // $('#signup').submit(function(event) {
    //     event.preventDefault();
    //     var username = $('#username').val();
    //     var planet = $('#planet').val();
    //     $.post('assets/process.php', 'username=' + username + '&planet=' + planet, function () {
    //         alert('response has been received');
    //     });
    // });

    // $('#signup').submit(function(event) {
    //     event.preventDefault();
    //     var username = $('#username').val();
    //     var planet = $('#planet').val();
    //     $.post('assets/process.php',
    //     {
    //         username: username,
    //         planet: planet
    //     },
    //     function () {
    //         alert('response has been received');
    //     });
    // });


    // jQuery’s serialize() function

    // $('#signup').submit(function(event) {
    //     event.preventDefault();
    //     var formData = $(this).serialize();
    //     $.post('assets/process.php', formData, function () {
    //         alert('response has been received');
    //     });
    // });


    // Processing Data from the Server

    // $('#signup').submit(function(event) {
    //     event.preventDefault();
    //     var formData = $(this).serialize();
    //     $.post('assets/process.php', formData, function (data, textStatus, jqXHR) {
    //         // console.log('data', data);
    //         // console.log('textStatus', textStatus);
    //         // console.log('jqXHR', jqXHR);
    //
    //         var newHTML;
    //         newHTML = '<h2>Your vote is counted</h2>';
    //         newHTML += '<p>Server response:' + data + '</p>'
    //
    //         $('#banner').html(newHTML);
    //     });
    // });


    // Handling Errors

    // $.get('assets/processss.php', 'text=text', processResponse).fail(errorResponse);
    //
    // function processResponse(data) {
    //     var newHTML;
    //     newHTML = '<h2>Your vote is counted</h2>';
    //     newHTML += '<p>The average rating for this movie is ';
    //     newHTML += data + '.</p>';
    //     $('#banner').html(newHTML);
    // }
    // function errorResponse() {
    //     var errorMsg = "Your vote could not be processed right now.";
    //     errorMsg += "Please try again later.";
    //     $('#banner').html(errorMsg);
    // }
    //
    //
    // // Deprecated
    // $.get(url, data, successFunction).error(errorFunction);



    // Receiving XML from the Server
    // XML (Extensible Markup Language)

    // $.get('assets/process.php','id=234',processXML);
    // function processXML(data) {
    //
    //     var messageContent = $(data).find('content').text()
    //
    //     console.log(messageContent);
    // }


    // JSON - JavaScript Object Notation

    // {
    //     "firstName": "Frank",
    //     "lastNam": "Smith",
    //     "phone": "503-555-1212"
    // }


    // $.getJSON(url, data, callback);
    // $.getJSON('assets/process.php','id=234',process);
    // function process(data) {
    //     console.log(data);
    // }

    // $.getJSON('contacts.php','contact=123',processContacts);
    // function processContacts(data) {
    //     var infoHTML='<p>Contact: ' + data.firstName;
    //     infoHTML+=' ' + data.lastName + '<br>';
    //     infoHTML+='Phone: ' + data.phone + '</p>';
    //     $('#info').html(infoHTML);
    // }


    // $.get('contacts.php','contact=123',processContacts, "json");
    // function processContacts(data) {
    //     var infoHTML='<p>Contact: ' + data.firstName;
    //     infoHTML+=' ' + data.lastName + '<br>';
    //     infoHTML+='Phone: ' + data.phone + '</p>';
    //     $('#info').html(infoHTML);
    // }
    //
    // $.post('contacts.php','contact=123',processContacts, "json");


    // Complex JSON Objects
    // {
    //     "contact1": {
    //     "firstName": "Frank",
    //         "lastNam": "Smith",
    //         "phone": "503-555-1212"
    //     },
    //     "contact2": {
    //     "firstName": "Peggy",
    //         "lastName": "Jones",
    //         "phone": "415-555-5235"
    //     }
    // }

    // And retrieve the first name of the first contact like this: data.contact1.firstName


    // $.ajax()
    // $.ajax({
    //     dataType: "json",
    //     url: url,
    //     data: data,
    //     success: success,
    //     method: method // (default: 'GET')
    // });



    // Introducing JSONP  - JSON with padding

    // Flickr

    // var URL = "http://api.flickr.com/services/feeds/photos_public.gne";
    // var ID = "25053835@N03";
    // var jsonFormat = "&format=json&jsoncallback=?";
    // var ajaxURL = URL + "?id=" + ID + jsonFormat;
    //
    // $.getJSON(ajaxURL, function (data) {
    //     console.log(data)
    //
    //     $('#banner').text(data.title).wrapInner('<h1>');
    //     $.each(data.items, function (i, photo) {
    //         var photoHTML = '<span class="image">';
    //         photoHTML += '<a href="' + photo.link + '">';
    //         photoHTML += '<img src="' + photo.media.m.replace('_m', '_s') + '">';
    //         photoHTML += '</a></span>';
    //         $('#banner').append(photoHTML);
    //     });
    //
    // });


    // Google Maps

    $('#map').goMap();





    console.log();

}); // document ready end

