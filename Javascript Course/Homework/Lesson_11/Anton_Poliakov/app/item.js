let createItem = (id, thumbnail, title, authors, date, link) => {
   return `<div class="col-12">
                <div class="card mb-4">
                  <img class="card-img-top" src="${ thumbnail }">
                  <div class="card-body">
                    <h5 class="card-title">${ title }</h4>
                    <p class="card-text">
                      ${ authors }</br>
                      <small>${ date }</small>
                    </p>
                    <a href="#" id="${ id }" class="send-order btn btn-primary" data-toggle="modal" name="order" data-target="#order-modal">Заказать</a>
                    <input type="hidden" value=""/>
                  </div>
                <div>
            </div>`
}

export { createItem };
