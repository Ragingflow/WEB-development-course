$(document).ready(function() {

    //$('p').hide()

    // Chaining functions

    // $('#banner').width(300)
    //     .height(600)
    //     .text('Hi')
    //     .fadeOut(3000)
    // $('#banner').height(600)


    // Adding Content to a Page

    // .html()
    // console.log($('#banner').html())
    // console.log($('#banner').html('<h1>Banner head</h1>'))


    // .text()


    // .append()
    // $('#banner').append('<h1>Banner head</h1>');

    // .prepend()
    // $('#banner').prepend('<h1>Banner head</h1>');

    // .before
    // $('#banner').before('<h1>Banner head</h1>');


    // .after
    // $('#banner').after('<h1>Banner head</h1>');


    //.prependTo()
    //$('#banner').prependTo('<h1>Banner head</h1>');

    // .appendTo()
    // $('#banner').appendTo('ul li');


// Replacing and Removing Selections

    // .remove();
    // $('#banner').remove();

    // .replaceWith
    // $('#banner').replaceWith('<h1>Banner head</h1>');



// Setting and Reading Tag Attributes

    // .addClass()
    // $('a[href^="http://"]').addClass('externalLink')


    // .removeClass
    // $('a[href^="http://"]').removeClass('externalLink')


// Reading and Changing CSS Properties

    // .css
    // console.log($('#banner').css('background-color'));

    // $('#banner').css('background-color', 'red')

    // $('#banner').css({
    //     'background-color': 'red',
    //     'border' : '2px solid black'
    // })


    // $('#banner').css({
    //     backgroundColor: 'red',
    //     border : '2px solid black'
    // })


// Reading, Setting, and Removing HTML Attributes

    // .attr()

    // console.log($('img').attr('src'));

    // $('img:first').attr('src', 'assets/img3.jpg');

    // .removeAttr


// Acting on Each Element in a Selection

    // $('img').each(function(){
    //
    //     var $this = $(this);
    //     console.log($this.attr('src'));
    //
    //     var src = $this.attr('src');
    //
    //     if(src == 'assets/img0.png') {
    //         $this.attr('src', 'assets/img3.jpg');
    //     }
    //
    // });



    // Events


    // Mouse Events

    // click

    // $('p').click(function(){
    //     console.log('click')
    //     $(this).addClass('red');
    // });


    // dblclick

    // $('p').dblclick(function(){
    //     console.log('dblclick')
    //     $(this).addClass('red');
    // });



    // mousedown

    // $('p').mousedown(function(){
    //     console.log('mousedown')
    //     $(this).addClass('red');
    // });
    //
    //
    // // mouseup
    // $('p').mouseup(function(){
    //     console.log('mouseup')
    //     $(this).removeClass('red');
    // });


    // mouseover
    // $('p').mouseover(function(){
    //     console.log('mouseover')
    //     $(this).addClass('red');
    // });
    //
    //
    // // mouseout
    // $('p').mouseout(function(){
    //     console.log('mouseout')
    //     $(this).removeClass('red');
    // });



    // mousemove
    // $('p').mousemove(function(){
    //     console.log('mousemove')
    // });



// Document/Window Events


    // load
    // $(window).on('load', function() {
    //     console.log('loaded');
    // });
    //
    //
    // // resize
    // $(window).on('resize', function() {
    //     console.log('window resize');
    // });
    //
    //
    // // scroll
    // $(window).on('scroll', function() {
    //     console.log('window scroll');
    // });
    //
    //
    // // unload
    // $(window).on('unload', function() {
    //     console.log('window unload');
    // });





   // Form Events

   // submit

    // $('#signup').submit(function(event){
    //     console.log('submit');
    //     event.preventDefault();
    // });
    //
    //
    // // reset
    // $('#signup').on('reset', function(event){
    //     console.log('reset');
    //     event.preventDefault();
    // });
    //
    //
    //
    // // change
    //
    // $('#username, input[type=checkbox]').on('change', function(event){
    //     console.log('changed');
    //     console.log($(this));
    // })
    //
    //
    //
    // // focus
    // $('#username, input[type=checkbox]').on('focus', function(event){
    //     console.log('focus input');
    // });
    //
    //
    // // blur
    // $('#username, input[type=checkbox]').on('blur', function(event){
    //     console.log('blur');
    // });


    // $('a').on('focus', function(event){
    //     console.log('focus link');
    // });
    // $('a').on('blur', function(event){
    //     console.log('blur link');
    // });




    // Keyboard Events

    // keypress
    $('input').on('keypress', function(event){
        console.log('keypress');
    });

    // keydown
    $('input').on('keydown', function(event){
        console.log('keydown');
    });

    // keyup
    $('input').on('keyup', function(event){
        console.log('keyup');
    });


    console.log();

}); // document ready end

