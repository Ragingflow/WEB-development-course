import 'validate';

$(document).ready(() => {

  $('#searchForm').submit( event => {
    event.preventDefault();
    $('.book-item , .order').remove();
    let searchBook  = $('#search').val(),
        URL         = "https://www.googleapis.com/books/",
        ajaxURL     = URL + "v1/volumes?q=" + searchBook;
    $.getJSON(ajaxURL, displayBooks);
  }); // <------searchForm the end-----------------------------------------------

  let $bookShell = $('#bookShell'),
      $popupForm = $('.popup'),
      $overlay   = $('.overlay');

  // function for displaying all results from search---------------------------
  function displayBooks({items}) {
    $.each(items, (i, {volumeInfo}) => {
      let bookProp      = volumeInfo,
          title         = bookProp.title,
          img           = bookProp.imageLinks.smallThumbnail,
          description   = bookProp.description,
          authors       = bookProp.authors,
          publishedDate = new Intl.DateTimeFormat('uk-UA').format(new Date(bookProp.publishedDate)),
          bookItem      = `<div class="book-item">
                              <div class="item-img">
                                <img src="${img}">
                              </div>
                              <div class="item-info">
                                <h3 class="title">"${title}"</h3>
                                <p class="author">By: ${authors}</p>
                                <p class="published">${publishedDate}</p>
                              </div>
                              <button type="button" id="${i}" class="item-button">Buy now</button>
                            </div>`;
      $bookShell.append(bookItem);
    }); // <------each the end-------------------------------------------------------

    // Show infomation about book when the user click on the button - "Buy now"-------------------

    $bookShell.on('click', '.item-button', function (){
      $('#item-buy').remove();
      let idBook = $(this).attr('id'),
          popup  = `<form id="item-buy" action="#" method="post">
                      <span class="close">Close</span>
                      <div class="item-img-buy">
                        <img src="${items[idBook].volumeInfo.imageLinks.smallThumbnail}">
                      </div>
                      <div class="description">
                      <p>${items[idBook].volumeInfo.description}</p>
                      </div>
                      <div class="form-fields">
                        <div class="field">
                          <label for="name"> Full name</label>
                          <input id="name" type="text" name="name">
                        </div>
                        <div class="field">
                          <label  for="email"> Email Address</label>
                          <input id="email" type="email" name="email">
                        </div>
                        <div class="field">
                          <label for="tel"> Telephone number</label>
                          <input id="tel" type="tel" name="tel">
                        </div>
                      </div>
                      <input class="send-btn" type="submit" value="Send">
                    </form>`;

    $popupForm.append(popup);
    $('.send-btn').prop('disabled', true);

    $overlay.fadeIn(400, () => {
      $popupForm.css('display', 'block').animate({opacity: 1, top: '5%'}, 200)
    }); // <------.overlay the end---------------------------------------------
  }); // <------function displayOrderForm the end);--------------------------------
} // <------function displayBooks the end------------------------------------------

// Add events to dynamic elements------------------------------------------------
$popupForm.on('click', '.close', closePopupForm)
          .on('change blur keyup', 'input', buttonEnable)
          .on('submit', '#item-buy', formValidation)


// ----------function for close popup -----------------------------------------
  function closePopupForm(){
    $popupForm.animate({opacity: 0, top: '45%'}, 200,
      () => {
        $(this).css('display', 'none');
        $overlay.fadeOut(400);
      });
  }; // <------ function closePopupForm the end--------------------------------

// function for eneble the buttom - 'send' when the user has filled all the fields-----
  function buttonEnable(){
      let $fullName  = $('#name').val(),
          $email     = $('#email').val(),
          $tel       = $('#tel').val(),
          submitBtn = $('.send-btn');
      if(!($fullName == "" || $email == "" || $tel == "")){
        submitBtn.prop('disabled', false);
      } else {
        submitBtn.prop('disabled', true);
      }
  }; // <------ function buttonEnable the end-----------------------------------

// -----------Add validation method for ukrainian phone number-------------------
  $.validator.addMethod('phoneUA', function(value, element){
    return this.optional(element) || /^\+380\d{9}$/.test(value);
  }, "Please enter a valid phone number.");

//------------------Function for form validation---------------------------------
  function formValidation(){
    event.preventDefault();
    let $buyForm   = $('#item-buy');
    $buyForm.validate({
      rules: {
        name: {
         required: true,
         minlength: 2
       },
        email: {
          required: true,
          email: true
        },
        tel: {
          required: true,
          phoneUA: true
        }
      }
    }); // <------function validate the end--------------------------------------

// if the order form is valid then show order informaation and close popup---------------------------------------------
    if($buyForm.valid()){
      $buyForm.on({
        submit: formOrder,
        click: closePopupForm
      });
    };
  }; // <------function formValidation the end

// -----=formation of the user's order------------------------------------------
  function formOrder(){
    event.preventDefault();
    let $fullName  = $('#name').val(),
        $email     = $('#email').val(),
        $tel       = $('#tel').val(),
        $imgSRC    = $('.item-img-buy img').attr('src'),
        $orderBook = $('#orderBook'),
        orderInfo  = `<div class="order">
                        <p>Your order: </p>
                        <div class="order-info ">
                            <img src="${$imgSRC}">
                        </div>
                          <div class="customer-info">
                            <p class="fullName">${$fullName}</p>
                            <p class="email">${$email}</p>
                            <p class="tel">${$tel}</p>
                        </div>
                      </div>`;

    $orderBook.append(orderInfo);
  }; // <------function formOrder the end------------------------------------------
}); // <---- document ready end------------------------------------------------
