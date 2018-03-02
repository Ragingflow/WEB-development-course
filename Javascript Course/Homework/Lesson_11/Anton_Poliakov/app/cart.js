let createCart = (title, thumbnail, name, email, phone) => {
  return `<div class="row mb-4">
            <div class="col-4">
              <img src="${ thumbnail }" class="img-thumbnail mr-2">
            </div>
            <div class="col-8">
              <p>
                <strong>${ title }</strong></br>
                <small>${ name }</small></br>
                <small>${ email }</small></br>
                <small>${ phone }</small>
              </p>
            </div>
          </div>`
}

export { createCart };
