import * as Tether from 'tether';
import * as bootstrap from 'bootstrap';
import * as validate from 'jquery-validation';
import * as mask from 'jquery-mask-plugin';

import { createItem } from './item';
import { createPopup } from './popup';
import { createCart } from './cart';

$(document).ready(function() {

  const api = 'https://www.googleapis.com/books/v1/volumes';
  let $items      = $('#items'),
      $makeOrder   = $('#make-order'),
      $sendButton  = $('#send-button');

  $('#search').on('submit', function(event) {
    event.preventDefault();
    let query = api + '?' + $(this).serialize();
    $items.html('');
    getSearchResult(query);
  });

  function showResults(data) {
    data.forEach(function(item) {
      $items.append(
        createItem(
          item.id,
          item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
          item.volumeInfo.title ? item.volumeInfo.title : 'Нет названия',
          item.volumeInfo.authors ? item.volumeInfo.authors : '',
          toLocalDate(item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : '')
        )
      );
    });
    sendOrder(data);
    addToCart(data);
  }

  function sendOrder(data) {
    $('.send-order').on('click', function(event) {
      event.preventDefault();
      let currentId = $( this ).attr('id');

      data.forEach(function(item) {
        if (currentId === item.id) {
          $('#order-details').html(createPopup(
            item.volumeInfo.title ? item.volumeInfo.title : 'Нет названия',
            item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
            item.searchInfo ? item.searchInfo.textSnippet : 'Нет описания'
          ));

          $('.phone').mask('+00 (000) 000-00-00');
        }
      }, currentId);
    })
  }

  function addToCart(data) {
    $makeOrder.on('submit', function(event) {
      event.preventDefault();
      $('#order-modal').modal('hide');

      let formData  = $( this ).serializeArray(),
          thumbnail = $('#popup-thumbnail').attr('src'),
          title     = $('#popup-title').val();

      $('#cart').append(
        createCart(title, thumbnail, formData[0].value, formData[1].value, formData[2].value)
      );
    });

    $makeOrder.on('keyup blur', function() {
      if ($makeOrder.valid()) {
        $sendButton.prop('disabled', false);
      } else {
        $sendButton.prop('disabled', true);
      }
    });
  }

  async function getSearchResult(query) {
    $.getJSON(query, function(data) {
        return showResults(data.items);
    });
  }

  function toLocalDate(date) {
    let grabDate = Date.parse(date);
    if (date) return new Intl.DateTimeFormat('uk-UA').format(grabDate);
    return '';
  }

  $("#search").validate({
    required: true,
    messages: {
      q: false
    }
  });

  $makeOrder.validate({
    onsubmit: true,
    rules: {
      required: true,
      email: true,
      phone: {
        minlength: 19
      }
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
      },
      email: {
        required: 'Введите эл. почту',
        email: 'Введите эл. почту правильно, пример: name@example.com'
      },
      phone: {
        required: 'Введите телефон',
        minlength: 'Введите номер телефона полностью'
      }
    }
  });

})
