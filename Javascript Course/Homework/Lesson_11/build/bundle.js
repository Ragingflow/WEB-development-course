/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

  $("#main_form").on('submit', function () {

    var search = $("#books").val();

    var all = {};
    var common = "";
    var options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };
    var date = "";

    $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

      $('#search-result').empty();

      for (var i in response.items) {

        all = {
          thumb: response.items[i].volumeInfo.imageLinks.thumbnail,
          author: response.items[i].volumeInfo.authors,
          title: response.items[i].volumeInfo.title,
          date: response.items[i].volumeInfo.publishedDate,
          description: response.items[i].volumeInfo.description
        };

        date = new Date(response.items[i].volumeInfo.publishedDate).toLocaleString("ru", options);

        common = $("<div class = \"search_result\"><img class = \"search-image\" src = \"" + all.thumb + " \n              \" alt = \"\"><div>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: <span  class = \"search-title\">" + all.title + "</span></div>\n              <div>\u0410\u0432\u0442\u043E\u0440: <span class = \"search_author\">" + all.author + "</span></div>\n              <div>\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438: <span class = \"search_date\">" + date + "</span></div>\n              <div class = \"search_description\" style = \"display: none\">" + all.description + "</div>\n              <div><button class = \"order\" >\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C</button></div></div>");
        common.appendTo('#search-result');
      }
    });
    return false;
  });

  $('#search-result').on('click', '.order', function () {
    $('#click-result').empty();
    var target = $(this).closest('.search_result').find('.search-image');
    var target2 = $(this).closest('.search_result').find('.search_description');
    $(target).clone().appendTo('#click-result');
    $(target2).clone().appendTo('#click-result').css('display', 'block');
    $('#overlay').fadeIn(400, function () {
      $('#modal_form').css('display', 'block').animate({ opacity: 1 }, 200);
    });
  });

  $('#modal_close, #overlay').click(function () {
    $('#modal_form').animate({ opacity: 0 }, 200, function () {
      $(undefined).css('display', 'none');
      $('#overlay').fadeOut(400);
    });
  });

  $('.order-form-enter').on('keyup', function () {
    var name = $('#order-name').val();
    var mail = $('#order-mail').val();
    var phone = $('#order-phone').val();
    var ordBut = $('#order-item');
    var mailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/i;

    $('#order-phone, #order-mail, #order-name').on('blur', function () {
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

    if (name.length >= 2 && phoneExp.test(phone) && mailExp.test(mail)) {
      ordBut.prop('disabled', false);
    } else {
      ordBut.prop('disabled', true);
    }
  });
});

/***/ })
/******/ ]);