$(document).ready(() => {	

   $("#main_form").on('submit', () => {

   	  let search = $("#books").val();
		  
      let all = {};
      let common = "";
      let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      let date = "";

   	  $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, (response) => {

        $('#search-result').empty();
      
          for (let i in response.items) {
          	
            all = {
              thumb: response.items[i].volumeInfo.imageLinks.thumbnail,
              author: response.items[i].volumeInfo.authors,
              title: response.items[i].volumeInfo.title,
              date: response.items[i].volumeInfo.publishedDate,
              description: response.items[i].volumeInfo.description
            };

            date = new Date(response.items[i].volumeInfo.publishedDate).toLocaleString("ru", options);

          	common = $(`<div class = "search_result"><img class = "search-image" src = "${all.thumb} 
              " alt = ""><div>Название: <span  class = "search-title">${ all.title }</span></div>
              <div>Автор: <span class = "search_author">${ all.author }</span></div>
              <div>Дата публикации: <span class = "search_date">${date}</span></div>
              <div class = "search_description" style = "display: none">${all.description}</div>
              <div><button class = "order" >Заказать</button></div></div>`);
            common.appendTo('#search-result');
          }
   	  });
      return false;
   });




  $('#search-result').on('click', '.order', function() {
    $('#click-result').empty();
    let target = $(this).closest('.search_result').find('.search-image');
    let target2 = $(this).closest('.search_result').find('.search_description');
    $(target).clone().appendTo('#click-result');
    $(target2).clone().appendTo('#click-result').css('display', 'block');
    $('#overlay').fadeIn(400,function(){ 
      $('#modal_form').css('display', 'block').animate({opacity: 1}, 200); 
    });
  });

  $('#modal_close, #overlay').click( () =>{
    $('#modal_form').animate({opacity: 0}, 200, () =>{ 
      $(this).css('display', 'none');
      $('#overlay').fadeOut(400);
    });
  });




  $('.order-form-enter').on('keyup', () => {
    let name = $('#order-name').val();
    let mail = $('#order-mail').val();
    let phone = $('#order-phone').val();
    let ordBut = $('#order-item');
    let mailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let phoneExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/i;

    $('#order-phone, #order-mail, #order-name').on('blur', () => {
      if (name.length < 2) {
        $('#order-name').css('border-color', 'red');
      } else {
        $('#order-name').css('border-color', 'black');
      }

      if (phoneExp.test(phone)) {
        $('#order-phone').css('border-color', 'black');
      } else {
        $('#order-phone').css('border-color', 'red');
      }

      if (mailExp.test(mail)) {
        $('#order-mail').css('border-color', 'black');
      } else {
        $('#order-mail').css('border-color', 'red');
      }
    });
    
    if ((name.length >= 2) && (phoneExp.test(phone)) && (mailExp.test(mail))) {
      ordBut.prop('disabled', false);
    } else {
      ordBut.prop('disabled', true);
    }
  });

});