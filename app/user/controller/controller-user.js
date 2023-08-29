export let renderUserProductsList = (list) => {
  let contentHTML = "";
  list
    .reverse()
    .forEach(
      ({
        id,
        name,
        type,
        price,
        screen,
        backCamera,
        frontCamera,
        img,
        description,
      }) => {
        let trString = `<div class="item col-1-of-4">
          <div class="img">
            <img
              src="${img}"
              alt=""
            />
          </div>
          <div class="name">
            <h2>${name}</h2>
          </div>
          <div class="price">
            <h3>PRICE: <span>${price} VND</span></h3>
          </div>
          <div class="screen">
            <h3>SCREEN: <span>${screen}</span></h3>
          </div>
          <div class="backCamera">
            <h3>BACK CAMERA: <span>${backCamera}</span></h3>
          </div>
          <div class="frontCamera">
            <h3>FRONT Camera: <span>${frontCamera}</span></h3>
          </div>
          <div class="description"></div>
          <h3>DES: <span>${description}</span></h3>
          <button
            onclick="add2Cart(${id})"
            type="button"
            class="btn btn-primary"
            style="margin: 50px 0 0 30px"
          >
            Add to Cart
          </button>
        </div>`;
        contentHTML += trString;
      }
    );
  document.getElementById("item_lst").innerHTML = contentHTML;
};

// export let add2Cart = (id) => {
//   console.log(data.id);
// };
