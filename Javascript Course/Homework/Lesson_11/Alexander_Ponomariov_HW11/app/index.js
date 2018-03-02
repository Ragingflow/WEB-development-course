document.addEventListener('DOMContentLoaded', () => {

    // ------------------------- Search books ---------------------
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();

        let searchString = document.getElementsByName('search-field');

        fetch(
            'https://www.googleapis.com/books/v1/volumes?q=' + searchString[0].value,
            {method:'get'},
        ).then( response => {
            return response.json();
        }).then( books => {

            let resultBlock = document.getElementById('result');

            if (!books.items) {
                resultBlock.innerHTML = 'No results';
                return false;
            }
            resultBlock.innerHTML = '';

            books.items.map(elem => {

                let newResultElem = document.createElement('div');

                newResultElem.className = "book-block";

                newResultElem.innerHTML = `                    
                    <img src="${elem.volumeInfo.imageLinks.smallThumbnail}" alt="${elem.volumeInfo.title}" class="book-image">
                    <h2>${elem.volumeInfo.title}</h2>
                    <div class="authors">Author${ elem.volumeInfo.authors && elem.volumeInfo.authors.length > 1 ? 's' : '' }: ${elem.volumeInfo.authors ? elem.volumeInfo.authors.join(', ') : 'no information' }</div>
                    <div class="pub-date">Published date: ${new Date(elem.volumeInfo.publishedDate).toLocaleDateString()}</div>
                    <div class="description">Description: ${elem.volumeInfo.description ? elem.volumeInfo.description : 'no infiormation'}</div>
                    
                    <button class="buy-button">Buy</button>
                `;

                resultBlock.appendChild(newResultElem);

            });
        });
    });
    // ------------------------- END Search books ---------------------


    // ------------------------- Show Pop Up ---------------------
    document.getElementById('result').onclick = e => {
       let target = e.target;

       if ( target.className == 'buy-button' ) {
           createPopUp(target.closest('.book-block'));
       }
    }
    // ------------------------- END Show Pop Up ---------------------


    // ------------------------- Close Pop Up ---------------------
    document.body.onclick = e => {
        let target = e.target;

        if (
            ( target.className == 'close' && target.closest('.buy-pop-up') )
            || target.className == 'buy-pop-up'
        ) {
            removePopUp();
        }
    }
    // ------------------------- END Close Pop Up ---------------------

    // ------------------------- Validate buy form ---------------------
    document.onclick = e => {
        let target = e.target;

        let validationObj = {
            name(node) {
                if ( node.value.trim().length < 3 ) {
                    this.error(node, 'Wrong name. Min length 3 symbols.');
                }
            },
            email(node) {
                if ( !/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/.test(node.value.trim()) || node.value.trim().length < 3 ) {
                    this.error(node, 'Wrong email.');
                }
            },
            'phone-number' : function(node) {
                if ( !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(node.value.trim())) {
                    this.error(node, 'Wrong phone-number.');
                }
            },
            error(node, message) {

                if ( !node.parentElement.getElementsByClassName('error-message').length ) {
                    let errorMsg = document.createElement('div');

                    errorMsg.className = "error-message";

                    errorMsg.innerHTML = `${message}`;
                    node.parentElement.insertBefore(errorMsg, node);
                }
            }
        }

        if ( target.closest('.buy-pop-up') && target.className == 'send' ) {
            let inputsCollection = document.getElementsByClassName('buy-pop-up')[0].getElementsByTagName('input');
            for (let i = 0; i < inputsCollection.length; i++ ) {
                // console.log(inputsCollection[i].getAttribute("name"));
                validationObj[inputsCollection[i].getAttribute("name")](inputsCollection[i]);
            }

            if (!target.closest('.buy-pop-up').getElementsByClassName('error-message').length) {git
                target.closest('.pop-up').innerHTML = `
                    <div class="close">X</div>
                    <div>Data was sent successfuly!!!</div>
                `
            }
        }

        if ( target.tagName.toUpperCase() == 'INPUT' ) {
            target.parentElement.getElementsByClassName('error-message').length && target.parentElement.getElementsByClassName('error-message')[0].remove();
        }

    }
    // ------------------------- END Close Pop Up ---------------------


});



// ------------------------- Create Pop Up function ---------------------
function createPopUp(bookNode) {

    removePopUp();

    let popUpBlock = document.createElement('div'),
        body = document.getElementsByTagName('body');

    popUpBlock.className = 'buy-pop-up';

    popUpBlock.innerHTML = `
        <div class="pop-up">
            <div class="close">X</div>
            <img src="${bookNode.getElementsByClassName('book-image')[0].src}" alt="${bookNode.getElementsByClassName('book-image')[0].alt}" class="book-image">
            <div class="book-description">${bookNode.getElementsByClassName('description')[0].innerText}</div>
            <label><span>Name</span>
                <input type="text" name="name" required="required">
            </label>
            <label><span>e-mail</span>
                <input type="email" name="email" required="required">
            </label>
            <label><span>Phone number</span>
                <input type="text" name="phone-number" required="required">
            </label>
            <button class="send">Send</button>
        </div>
    `;

    body[0].appendChild(popUpBlock);

}
// ------------------------- END Create Pop Up function ---------------------


// ------------------------- Remove Pop Up function ---------------------
function removePopUp() {
    document.getElementsByClassName('buy-pop-up').length && document.getElementsByClassName('buy-pop-up')[0].remove();
}
// ------------------------- END Remove Pop Up function ---------------------
