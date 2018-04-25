let createPopup = (title, thumbnail, description) => {
  return `<div class="row">
            <div class="col-4">
              <img id="popup-thumbnail" class="img-thumbnail" src="${ thumbnail }">
            </div>
            <div class="col-8">
              <p id="popup-description">${ description }</p>
              <fieldset class="form-group">
                <input id="name" type="text" class="form-control" name="name" placeholder="Имя и фамилия" required>
              </fieldset>
              <fieldset class="form-group">
                <input id="email" type="email" class="form-control" name="email" placeholder="Эл. почта" required>
              </fieldset>
              <fieldset id="phone" class="form-group">
                <input type="tel" class="phone form-control" name="phone" placeholder="Телефон" required>
              </fieldset>
              <input id="popup-title" type="hidden" value="${ title }">
            </div>
          </div>`
}

export { createPopup };
