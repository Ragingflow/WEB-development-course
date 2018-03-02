import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dateformat from 'dateformat'
import 'jquery-validation'
import 'jquery-mask-plugin'
import './style.css'


let googleApi = 'https://www.googleapis.com/books/v1/volumes',
    $bookNameInput = $('#bookName'),
    booksBlock = $('#booksBlock'),
    responseArray = [],
    $modal = $('#orderModal'),
    modalContent = $modal.find('#modalContent'),
    orderButton = $modal.find('#orderButton'),
    orderArray = [],
    orderForm = $('#orderForm')

orderForm.validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        name: {
            required: "Please enter your name",
            minlength: "Your name must be at least 2 characters long"
        },
        email: "Please enter a valid email address"
    },

})

$('input[name="phone"]').mask('+38(000)000-00-00');

$('#sendBookName').click(() => {
    event.preventDefault();
    booksBlock.empty();
    let bookName = $bookNameInput.val();
    if (bookName === undefined) return;
    $.getJSON(googleApi, {q: bookName})
        .done((response) => {
            renderJson(response);
        });

});

$(document).on('click', '#moreButton', (e) => {
    modalContent.empty()
    let index = e.target.attributes["data-index"].value
    let output = ''
    if (responseArray[index].volumeInfo.imageLinks.thumbnail !== undefined) {
        output += `<img src="${responseArray[index].volumeInfo.imageLinks.thumbnail}" alt="">`
    }
    if (responseArray[index].volumeInfo.title !== undefined) {
        output += `<h2>${responseArray[index].volumeInfo.title}</h2>`
    }
    if (responseArray[index].volumeInfo.description !== undefined) {
        output += `<p class="mt-3">${responseArray[index].volumeInfo.description}</p>`
    }
    orderButton.attr('data-index', index)
    modalContent.append(output)
    $modal.modal('show')
})

orderForm.on('submit', () => {
    let isvalid = orderForm.valid()
    if (isvalid) {
        event.preventDefault()
        addOrder()
    }
})

let renderJson = (data) => {
    let output = ''
    let i = 0;
    responseArray = []
    $.each(data.items, (key, value) => {
        let publishDateFormated;
        let set = new Set(value.volumeInfo.authors)
        output += `<div class="col-md-4 col-12 book-block">`
        if (value.volumeInfo.imageLinks.thumbnail !== undefined) {
            output += `<div class="img-container"><img src="${value.volumeInfo.imageLinks.thumbnail}" alt=""></div>`
        }

        if (value.volumeInfo.title !== undefined) {
            let title = value.volumeInfo.title.substr(0, 50)
            output += `<h4>${title}</h4>`
        }
        set.forEach((value, valueAgain, set) => {
            output += `<h6>${value} </h6>`
        });
        if (value.volumeInfo.publishedDate !== undefined) {
            publishDateFormated = dateformat(new Date(value.volumeInfo.publishedDate), "dd.mm.yyyy");
            output += `<p>${publishDateFormated}</p>`
        }
        output += ` <button type="button" class="btn btn-info" id="moreButton" data-index="${i}">More</button></div>`
        i++;
        responseArray.push(value);

    })
    booksBlock.append(output)

    $bookNameInput.val('');

};

let addOrder = () => {
    $modal.modal('hide');
    let index = orderButton.attr('data-index')
    orderArray.push(responseArray[index])
    let output = ''
    if (orderArray.length > 0) {
        $.each(orderArray, (index, value) => {
            output += `<li class="list-group-item"> ${value.volumeInfo.title}</li> `
        })
        $('#orderList').html(output)
    }
}





