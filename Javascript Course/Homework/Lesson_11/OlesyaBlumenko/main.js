$( document ).ready(function() {
$('#form').submit(function(){
  $('#booksInfo').empty();
  var search = $('#search').val();
  $.getJSON( "https://www.googleapis.com/books/v1/volumes?q=" + search,
         function (data) {

           $.each(data.items, function(i, book){
               var date  = new Date(book.volumeInfo.publishedDate);
               var info = '<div id = "' + i + '" class = "info">';
               info += '<img src=" ' + book.volumeInfo.imageLinks.smallThumbnail + '"> ';
               info += '<h3> " ' + book.volumeInfo.title +'" </h3>';
               info += '<p> Автор: ' + book.volumeInfo.authors + '</p>';
               info += '<p> Год выпуска: ' + date.getDate()+'.' +date.getMonth()+'.'+date.getFullYear()+ 'гг.</p>';
               info += '<button id = "' + i + '" class= "btn" >Заказать</button>';
               info+= '</div>'
                $('#booksInfo').append(info);

                });

                $('.btn').click( function() {
                  var eq = $(this).attr('id');
                  var description ='<img src=" ' + data.items[eq].volumeInfo.imageLinks.smallThumbnail + '"> ';
                      description +='<p> Описание: ' + data.items[eq].volumeInfo.description + '</p>';
                      $('div.popup').attr("id", eq);

                  $('div[id="'+eq+'"].info').prepend($('.popup').prepend(description).show());
                  $('.bgpopup').show();
                  $('.bgpopup').click(function(){
                  $('div.popup > img').remove();
                  $('div.popup > p').remove();
                  $('.popup').hide();
                  $('.bgpopup').hide();

                  });
                 });

                 $("#buy").validate({
                   rules:{
                     name:{
                       required: true,
                       minlength: 2
                     },
                     phone:{
                       pattern: '\\+380\\d{2}\\d{7}'
                       }
                     }
                   ,
                     submitHandler: function(){
                         var eq = $('div.popup').attr('id');
                         var name = $('#name').val();
                         var email = $('#email').val();
                         var phone = $('#phone').val();
                         var order = '<div  class = "order">';
                         order += '<p> Вы хотите приобрести:</p>';
                         order += '<img src=" ' + data.items[eq].volumeInfo.imageLinks.smallThumbnail + '"> ';
                         order += '<p> " ' + data.items[eq].volumeInfo.title +'" </p>';
                         order += '<p> " ' + data.items[eq].volumeInfo.authors +'" </p>';
                         order += '<p> Ваши данные:</p>';
                         order += '<p> Имя:'+ name+'</p>';
                         order += '<p> e-mail:'+ email+'</p>';
                         order += '<p> Телефон:'+phone+'</p>';
                         order += '</div>';
                         $('#forSearch').append(order);
                         $('div.popup > img').remove();
                         $('div.popup > p').remove();
                         $('.popup').hide();
                         $('.bgpopup').hide();

                   }
                   });

           });

});

});
