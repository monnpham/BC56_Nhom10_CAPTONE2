export let renderUserProductsList = (list) => {
  let contentHTML = "";
  list
    .reverse()
    .forEach(
      ({
        id,
        name,
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
              id="imgPro"
            />
          </div>
          <div class="name">
            <h2 id="idPro" hidden>${id}</h2>
            <h2 id="namePro">${name}</h2>
          </div>
          <div class="price">
            <h3>PRICE: <span id="pricePro">${price}</span></h3>
          </div>
          <div class="screen">
            <h3>SCREEN: <span id="screenPro">${screen}</span></h3>
          </div>
          <div class="backCamera">
            <h3>BACK CAMERA: <span id="backCameraPro">${backCamera}</span></h3>
          </div>
          <div class="frontCamera">
            <h3>FRONT Camera: <span id="frontCameraPro">${frontCamera}</span></h3>
          </div>
          <div class="description"></div>
          <h3>DES: <span id="descriptionPro">${description}</span></h3>
          <button
          id="btnAdd2Cart"
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

export let renderCartProList = (data) => {
  let i = 0
  rendercart()
  window.checkout = () => {
    if (data.length > 0) {
      data.splice(0, data.length);
      rendercart()
    }
  }
  window.deleteProCart = (id) => {
    for (i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data.splice(i, 1);
        rendercart()
      }
    }
  }
  window.minus = (id) => {
    for (i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        if (data[i].quality > 0) {
          data[i].quality = data[i].quality - 1
          rendercart()
        }
      }
    }
  }
  window.plus = (id) => {
    for (i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data[i].quality = data[i].quality + 1
        rendercart()
      }
    }
  }
  function rendercart() {
    let cartHTML = "", count = 0, pric = 0
    data.sort((a, b) => a.id - b.id);
    data.reverse().forEach(({ id, name, price, img, quality }) => {
      count++
      price *= quality
      pric += Number(price)
      let cartString =
        `<li class="product">
          <a class="product-link">
            <span class="product-image">
              <img
                src="${img}"
                alt="Product Photo"
              />
            </span>
            <span class="product-details">
              <h3>${name}</h3>
              <span class="qty-price">
                <span class="qty">
                  <button onclick= minus(${id}) class="minus-button minus" id="minus-button-1">-</button>
                  <input
                    type="number"
                    id="qty-input-1"
                    class="qty-input"
                    step="1"
                    min="1"
                    max="1000"
                    name="qty-input"
                    value="${quality}"
                    pattern="[0-9]*"
                    title="Quantity"
                    inputmode="numeric"
                  />
                  <button onclick= plus(${id}) class="plus-button " id="plus-button-1">+</button>
                  <input
                    type="hidden"
                    name="item-price"
                    id="item-price-1"
                    value="12.00"
                  />
                </span>
                <span class="price">${price}</span>
              </span>
            </span>
          </a>
          <a onclick='deleteProCart(${id})' class="remove-button remove-icon"
            ><i class="bi bi-trash"></i  ></a>
        </li>`;
      cartHTML += cartString;
    });
    let amount = `$${pric}.00`
    let Bcount = `${count}`
    let proCount = `${count}`
    document.getElementById("proCart").innerHTML = cartHTML;
    document.getElementById("pro-count").innerHTML = proCount
    document.getElementById("bag-Count").innerHTML = Bcount
    document.getElementById("amount-pri").innerHTML = amount
  }

};

export let getInfo2Cart = (data) => {
  let id = data.id;
  let name = data.name;
  let price = data.price;
  let img = data.img;
  let quality = 1

  return {
    id,
    name,
    price,
    img,
    quality
  };
};

// export let showInfo2Cart = (data) => {
//   let { id, name, price, img } = data;
//   console.log(data);
//   document.getElementById("idPro").value = id;
//   document.getElementById("namePro").value = name;
//   document.getElementById("pricePro").value = price;
//   document.getElementById("imgPro").value = img;
// };
export let onSuccess = (message) => {
  Swal.fire(message, "", "success");
};

export let saveCart2Local = () => {
  var cartLocal = JSON.stringify(data);
  localStorage.setItem("cartUser", cartLocal);
};

export let getCartLocal = (name) => {
  if (localStorage.getItem(name)) {
    var cartJSLoval = localStorage.getItem(name);
    var cartJSValue = JSON.parse(cartJSLoval);
    // console.log("cartJSValue", cartJSValue);
    return cartJSValue;
  }
  return null;
};
