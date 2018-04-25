import * as tingle from 'tingle.js/src/tingle';
import { Validation, ValidationConfig, ValidationUI } from 'bunnyjs/src/Validation';
import Inputmask from "inputmask";

ValidationConfig.classInputGroupError = 'is-invalid';
ValidationConfig.classError = 'invalid-feedback';

ValidationUI.toggleErrorClass = function(inputGroup) {
    inputGroup.getElementsByTagName('input')[0].classList.toggle(this.config.classInputGroupError);
};


let popup = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
});

let im = new Inputmask("+38 (999) 999-99-99");

class SearchForm {
    constructor() {
        this.form = document.getElementById('search');
        this.searchList = document.getElementById('search-list');
        this.templataItem = this.searchList.querySelector('*') ;
        this.progress = document.getElementsByClassName('progress')[0];
        this.root = 'https://www.googleapis.com/books/v1/';
        this.param = {
            method: 'GET',
            cache: 'default'
        };

        this.templataItem.remove();
    }

    createItem( data ) {
        const title     = data.volumeInfo.title ? data.volumeInfo.title : 'none title',
              date      = data.volumeInfo.publishedDate ? new Date(data.volumeInfo.publishedDate).toLocaleDateString('uk-UA') : 'none date',
              authors   = data.volumeInfo.authors ? data.volumeInfo.authors.join(', ') : 'none authors',
              thumbnail = data.volumeInfo.imageLinks.thumbnail ? data.volumeInfo.imageLinks.thumbnail : 'http://customerengagement.asia/Blog/img/no_img.png';

        let newDiv = document.createElement("div");
            newDiv.classList = this.templataItem.classList;
            newDiv.innerHTML = this.templataItem.innerHTML;

        newDiv.querySelector('.card-title').innerHTML = title;
        newDiv.querySelector('.card-text small').innerHTML = date;
        newDiv.querySelector('.blockquote-footer small').innerHTML = authors;
        newDiv.getElementsByTagName('img')[0].src = thumbnail;

        this.searchList.appendChild(newDiv);

        newDiv.querySelector('.btn').addEventListener('click', (e) => {
            e.preventDefault();

            this.createPopup(thumbnail, title, data.volumeInfo.description);
        })

    }

    createPopup( thumbnail, title, description ) {
        popup.setContent(`
                <img src="${thumbnail}" class="rounded img-thumbnail float-left" alt="...">
                <h2>${title}</h2>
                <p class="lead">${description}</p>
                <br><br>
            `);

        popup.setFooterContent(`
                <h3 >Make order and our manager call you</h3>
                <br>
                <form>
                    <div class=" form-row">
                        <div class="col form-group">
                          <input required name="author" type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="col form-group">
                          <input required name="phone" type="tel" class="form-control" placeholder="Phone">
                        </div>
                      </div>
                      <div class="form-row ">
                        <div class="col form-group">
                          <input required name="email" type="email" class="form-control" placeholder="Email">
                        </div>
                    <div class="col">
                        <button type="submit" class="btn btn-block btn-primary">Send</button>
                    </div>
                  </div>
                </form>
        `);

        popup.open();
        let popupForm = popup.modalBoxFooter.querySelector('.tingle-modal-box__footer form');

        im.mask( popupForm.querySelector('input[type=tel]'));
        Validation.init(popupForm, true);

        popupForm.__proto__.submit = function () {
            cart.changeCart( thumbnail, title );
            popup.close();
            window.scrollTo(0,0);
        };
    }

    action () {
        this.form.addEventListener('submit',  (e) => {
            e.preventDefault();

            this.searchList.innerHTML = '';
            this.progress.style.display = 'flex';

            let formData  = new FormData( e.target );

            let parameters = [...formData.entries()]
                             .map(e => encodeURIComponent(e[0]) + "=" + encodeURIComponent(e[1]));

            fetch(this.root+'volumes?'+parameters[0], this.param).then(response => {
                return response.json();
            }).then(json => {
                this.progress.style.display = 'none';

                Object.keys(json.items).forEach( (key) => {
                    this.createItem(json.items[key]);
                });
            });

        });
    }

}

class Cart {
    constructor() {
        this.btn = document.getElementById('cartbtn');
        this.counterHtml = this.btn.getElementsByTagName('span')[0];
        this.counter = parseInt( this.counterHtml.innerHTML );
        this.elements = [];
        this.popupCart = new tingle.modal({
            footer: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Close",
        });
    }

    removeOrder ( i ) {
        this.elements.splice(i, 1);
        this.counter--;
        this.counterHtml.innerHTML = this.counter;

        if( this.counter == 0) {
            this.popupCart.close();
        } else {
            this.generateContent();
        }
    }

    changeCart ( thumbnail, title ) {
        this.counter++;
        this.elements.push( {
            thumbnail,
            title,
            'time': new Date().toLocaleTimeString('en-US')
        });

        this.counterHtml.innerHTML = this.counter;
    }

    generateContent() {
        let html ='';

        if( this.elements.length == 0) {
            html = "<h2>Your cart is empty</h2>";
        } else {
            console.log(this.elements);
            html = '<div class="row">';
            this.elements.forEach(function(v, i, a){
                html += `
                        <div class="col-4">
                          <div class="card bg-dark text-white"><img class="card-img" src="${v.thumbnail}" alt="${v.title}">
                            <div class="card-img-overlay">
                                <div class="card-body">
                                  <h5 class="card-title">${v.title}</h5>
                                  <p class="card-text"><small>Add in ${v.time}</small></p>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <a href="#" class="btn btn-danger">Remove</a>
                                </div>
                            </div>
                          </div>
                        </div>
                `;
            });
            html += '</div>';

        }

        this.popupCart.setContent( html );

        let removeBtn = this.popupCart.modalBoxContent.getElementsByClassName('btn-danger');

        for(let i = 0; i<removeBtn.length; i++){
            removeBtn[i].addEventListener('click', (e) => {
                e.preventDefault();
                this.removeOrder ( i );
            });
        };
    }

    action () {
        this.btn.addEventListener('click', (e) => {
            e.preventDefault();

            this.generateContent();

            this.popupCart.open();

        });
    }
}

let cart = new Cart();
cart.action();

let searchForm = new SearchForm();
searchForm.action();

