$(document).ready(function () {

    // Сохранение селекторов в переменные
    let errors = ["Please, enter a title", "No such books found!"];
    let request = "";
    let googleBooksAPI = "https://www.googleapis.com/books/v1/volumes?q=";
    let searchForm = $("#search");
    let searchBook = $("#search_book");
    let notFound = $("#not_found");
    let notFoundText = $("#not_found span");
    let result = $("#result");
    let orderImg = $(".modal-body img");
    let orderPar = $(".modal-body p");
    let orderForm = $("#order-form");
    let dataForModal = [];
    let usersData = [$("#name"), $("#email"), $("#tel")];
    let cartList = $("ul");
    let dataForCart = [$("[name='author']"), $("[name='book-title']")];

    // Проверка заполения формы и отправка GET-запроса в Google
    searchForm.on("submit",
            (function (event) {
                event.preventDefault();
                if (searchBook.val() == "") {
                    notFound.slideDown().slideUp(3000);
                    notFoundText.text(errors[0]).fadeIn().fadeOut(3000);
                } else {
                    request = googleBooksAPI + searchBook.val();
                    searchBook.val("");
                    $.get(request, function (data, status) {
                        if (status == "success") {
                            if (data.totalItems == 0) {
                                notFound.slideDown().slideUp(3000);
                                notFoundText.text(errors[1]).fadeIn().fadeOut(3000);
                            } else {
                                if ($(".res").length != 0) {
                                    $(".res").remove();
                                }
                                for (let i in data.items) {
                                    dataForModal[i] = [];
                                    dataForModal[i].push(data.items[i].volumeInfo.description);
                                    dataForModal[i].push(data.items[i].volumeInfo.imageLinks.smallThumbnail);
                                    addingResults(
                                            data.items[i].volumeInfo.imageLinks.smallThumbnail,
                                            data.items[i].volumeInfo.title,
                                            data.items[i].volumeInfo.authors,
                                            data.items[i].volumeInfo.publishedDate,
                                            dataForModal[i]
                                            );
                                }
                            }
                        }
                    });
                }
            })
            );

    // Функция для форматирования даты
    let yearFormat = (year) => {
        return year !== undefined ? year.split("-").reverse().join(".") : "-";
    };
    // Функция для додавления результатов запроса на страницу
    let addingResults = (img, title, authors, year, data) => {
        $(`<div class="row res-items">
                <div class="col-md-4 text-center"><img src=${img} class="img-thumbnail" alt=${title}></div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-3 title-item">Title:</div>
                        <div class="col-md-9 book-title">${title}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 title-item">Authors:</div>
                        <div class="col-md-9 authors">${authors}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 title-item">Date:</div>
                        <div class="col-md-9">${yearFormat(year)}</div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-12 buy">
                            <button type="button" class="btn btn-primary order" data-toggle="modal" data-target="#myModal" data-title="${title}" data-author="${authors}" data-desc="${data[0]}" data-img="${data[1]}" data-title="${title}">Buy</button>
                        </div>
                    </div>
                </div>
            </div>`)
                .addClass("row res")
                .insertAfter(result);
    };
    // Формирование модального окна для заказа
    $(document).on("click", ".order", function () {
        let $this = $(this);
        orderImg.attr({"src": $this.data("img"), "alt": $this.data("title")});
        orderPar.text($this.data("desc"));
        dataForCart[0].attr("value", $this.data("author"));
        dataForCart[1].attr("value", $this.data("title"));
    });
    // Добавление метода для валидации номера телефона в jQuery.validator
    jQuery.validator.addMethod("tel_number", function (value, element) {
        return this.optional(element) || /\+380\d{9}$/.test(value);
    }, jQuery.validator.format("Please enter the correct number format"));
    // Валидация формы заказа
    let validOrder = orderForm.validate({
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
                minlength: 13,
                tel_number: true
            }
        }
    });
    // Формирование заказа
    orderForm.on("submit", (function (event) {
        event.preventDefault();
        if (validOrder.errorList.length === 0) {
            $('.close').trigger('click');
            addingOrders(dataForCart[0].val(), dataForCart[1].val());
        }
    }));
    // Функция для добавления выбранной книги в список заказов
    let addingOrders = (authors, bookTitle) => {
        $(`<li class="list-group-item"><span class="lead">${authors}. </span>${bookTitle}</li>`
                ).appendTo(cartList);
    };
});
