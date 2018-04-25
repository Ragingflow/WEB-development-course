$(document).ready(function() {


    // Google Maps

    $('#map').goMap({
        // latitude : 48.464717,
        // longitude : 35.046183
        address: 'Dnipro, Ukraine',
        zoom: 10,
        maptype: 'ROADMAP', // SATELLITE, HYBRID, TERRAIN,
        scaleControl : true,
        // navigationControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        // mapTypeControl : false,
        mapTypeControlOptions: {
            position: 'TOP_LEFT',
            style: 'DROPDOWN_MENU'
        }
        markers:[
            {  latitude : 48.464717,
               longitude : 35.046183,
                title: "Dnipro"
            },
            {  latitude : 48.464717,
                longitude : 35.146183,
                title: "Dnipro 2"
            },
            {
                address: 'Dnipro, Shevchenko str., Ukraine',
                html : {
                    content : '<p>A fun place to play</p>',
                    popup : true
                }
            }
        ]

    }); // end goMap



    $('#map').click(function () {
        $.goMap.createMarker({
            address: 'Dnipro, Soborna sq., Ukraine',
            title : 'Marker 2'
        });
    });

    $('#removeMarkers').click(function() {
        $.goMap.clearMarkers();
    });




    // Getting the Most from jQuery


    // $() Is the Same as jQuery()


    // Saving Selections Into Variables


    // $('#tooltip').html('<p>An aardvark</p>');
    // $('#tooltip').fadeIn(250);
    // $('#tooltip').animate({left : 100px},250);


    // $('#tooltip').html('<p>An aardvark</p>').fadeIn(250).animate({left : 100px},250);

    // var $tooltip = $('#tooltip');
    // $tooltip.html('<p>An aardvark</p>');
    // $tooltip.fadeIn(250);
    // $tooltip.animate({left : 100px},250);


    // $this = $(this);
    //
    // $('a').click(function() {
    //     var $this = $(this); // store a reference to the <a> tag
    //     $this.css('outline','2px solid red');
    //     var href = $this.attr('href');
    //     window.open(href);
    //     return false;
    // }); // end click


    // Adding Content as Few Times as Possible

    // add div to end of element
    // $('#elemForTooltip').append('<div id="tooltip"></div>');
    // // add headline to tooltip
    // $('#tooltip').append('<h2>The tooltip title</h2>');
    // // add contents
    // $('#tooltip').append('<p>The tooltip contents here</p>');


    // var tooltip = '<div id="tooltip"><h2>The tooltip title</h2><p>The tooltip contents here</p></div>;
    // $('#elemForTooltip').append(tooltip);


    // Optimizing Your Selectors


    // Use ID selectors if at all possible

    // Use IDs first, as part of a descendent selector
    // $('#main a')


    // Use the .find() function
    // $('#main').find('a');


    // Traversing the DOM
    // Traversing (http://api.jquery.com/category/traversing/)

    // .find()

    // .children()

    // .parent()

    // .closest()

    // .siblings()

    // .next()

    // .prev()


    // Troubleshooting and Debugging

    // Syntax Errors
    // Runtime errors
    // Logic errors

















    console.log();

}); // document ready end

