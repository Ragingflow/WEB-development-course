$(document).ready(function() {

    // The hover()

    // $('h1').hover(function() {
    //     $('.banner-slogan').hide();
    // }, function() {
    //     $('.banner-slogan').show();
    // }); // end hover



    // The toggle() Event

    // $('#menu').toggle(
    //     function() {
    //         $('#submenu').show();
    //     }, // end first click
    //     function() {
    //         $('#submenu').hide();
    //     } // end second click
    // ); // end toggle
    //
    //
    // function showSubmenu() {
    //     $('#submenu').show();
    // }
    // function hideSubmenu() {
    //     $('#submenu').hide();
    // }
    // $('#menu').toggle(showSubmenu, hideSubmenu);



    // The Event Object

    // $(document).click(function(evt) {
    //     var xPos = evt.pageX;
    //     var yPos = evt.pageY;
    //     alert('X:' + xPos + ' Y:' + yPos);
    // }); // end click


    // pageX - The distance (in pixels) of the mouse pointer from the left edge of the browser window.
    // pageY - The distance (in pixels) of the mouse pointer from the top edge of the browser window.
    // screenX - The distance (in pixels) of the mouse pointer from the left edge of the monitor.
    // screenY - The distance (in pixels) of the mouse pointer from the top edge of the monitor.
    // shiftKey - Is true if the shift key is down when the event occurs.
    // which - Use with the keypress event to determine the numeric code for the key that was pressed (see tip, next)
    // target - The object that was the “target” of the event—for example, for a click() event, the element that was clicked.
    // data - A jQuery object used with the bind() function to pass data to an event handling function

    //
    // $('input').on('keypress', function(evt){
    //     console.log(evt);
    //     console.log(String.fromCharCode(evt.which));
    // });


    // Stopping an Event’s Normal Behavior

    // $('#menu').click(function(evt) {
    //         // clever javascript goes here
    //         evt.preventDefault(); // don't follow the link
    //     }
    // );
    //
    // $('#menu').click(function(evt){
    //     // clever javascript goes here
    //     return false; // don't follow the link
    // });


    // Removing Events
    // $('a').mouseover(function() {
    //     alert('You moved the mouse over me!');
    // });
    //
    // $('a').unbind('mouseover');


    // Stopping an Event in Its Tracks


    // $('#banner').click(function(evt) {
    //     console.log('click #banner');
    // }); // end click
    //
    // $('.banner-text').click(function(evt) {
    //     console.log('click .banner-text');
    // });
    //
    // $('.banner-slogan').click(function(evt) {
    //     evt.stopPropagation();
    //     console.log('click .banner-slogan');
    // });



    // Advanced Event Management

    // var linkVar = { message:'Hello from a link'};
    // function showMessage(evt) {
    //     alert(evt.data.message);
    // }
    //
    // $('a').bind('click',linkVar,showMessage);
    //

    // $('#theElement').bind({
    //     'click' : function() {
    //         // do something interesting
    //     }, // end click function
    //     'mouseover' : function() {
    //         // do something interesting
    //     } // end mouseover function
    // }); // end bind


    // .on( events [, selector ] [, data ], handler )

    // $(document).on('click', 'a.new', function(evt){
    //     ///// some code
    // });
    //




    // Animations and Effects


    // jQuery Effects

    // Basic Showing and Hiding

    // show()
    // hide()
    // toggle()

    //$('#banner').hide(2000);

    // fast = 200
    // normal = 400
    // slow = 600


    // Fading Elements In and Out

    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // $('#banner').click(function() {
    //     $('.banner-slogan').fadeToggle(2000);
    // }); // end click


    // $('#banner').click(function() {
    //     $('.banner-slogan').fadeTo(2000, 0.35);
    // }); // end click


    // Sliding Elements
    // slideDown()
    // slideUp()
    // slideToggle()

    // $('ul').slideUp('slow').slideDown('slow')



    // Animations
   /* $('.banner-slogan').animate(
        {
            left: '650px',
            opacity: .5,
            fontSize: '24px'
        },
        1500
    );*/

  /* $('#banner div').click(function() {
        $(this).animate(
            {
                left:'+=150px'
            },
            1000);
    });*/


/*    $('#banner').animate(
        {
            borderWidth: '20px 20px 20px 20px'
        },
        1000 );*/


    // Easing

    //$('ul').slideUp(3000,'linear');

    // $(document).ready(function() {
    //
    //     $('#banner').click(function() {
    //         $(this).animate({
    //                 width: '400px',
    //                 height: '400px'
    //             },
    //             1000,
    //             'easeInBounce') // end animate
    //     }); // end click
    //
    // }); // end ready


    // Performing an Action After an Effect Is Completed

    // $('#banner').fadeOut(1000, function() {
    //     $('h2').fadeOut(1000);
    // });

    // $('#banner').fadeOut(1000);
    // $('#banner').fadeIn(1000);

    // $('.banner-text').animate(
    //     {
    //         left: '+=400px',
    //     },
    //     1000,
    //     function() {
    //         $('h2').fadeOut(1000,
    //             function() {
    //                 $('.banner-slogan').fadeOut(1000);
    //             }
    //         );
    //     }
    // );


    // $('#banner').fadeOut(2000).fadeIn(250);



    // $('#banner').fadeOut(1000).delay(5000).fadeIn(250);





    // Improving Your Images

    // $('#photo').attr('src','images/newImage.jpg');

    // $('img:first').hover(
    //     function () {
    //         $('img:first').attr('src','assets/img3.jpg');
    //     },
    //     function() {
    //         $('img:first').attr('src','assets/img0.png');
    //     }
    // );


    // var newPhoto = new Image();
    // newPhoto.src = 'images/newImage.jpg';
    // var photo = $('#photo');
    // photo.attr('src',newPhoto.src);
    // photo.attr('width',newPhoto.width);
    // photo.attr('height',newPhoto.height);


    // Advanced Gallery with jQuery FancyBox




    console.log();

}); // document ready end

