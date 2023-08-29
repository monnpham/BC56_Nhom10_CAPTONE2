export let userRenderProductsList = (list) => {
  var contentHTMLDiv = "";
  for (var i = 0; i < list.length; i++) {
    pro = list[i];
    var contProDiv = `   <div class="item col-1-of-4">
          <div class="img">
            <img
            src="${pro.img}"
              alt=""
            />
          </div>
          <div class="name">
            <h2>${pro.name}</h2>
          </div>
          <div class="price">
            <h3>PRICE: <span>${pro.price} VND</span></h3>
          </div>
          <div class="screen">
            <h3>SCREEN: <span>${pro.screen}</span></h3>
          </div>
          <div class="backCamera">
            <h3>BACK CAMERA: <span>${pro.backCamera}</span></h3>
          </div>
          <div class="frontCamera">
            <h3>FRONT Camera: <span>${pro.frontCamera}</span></h3>
          </div>
          <div class="description"></div>
          <h3>DES: <span>${pro.description} VND</span></h3>
          <button
            onclick="add2cart(${pro.id})"
            type="button"
            class="btn btn-primary"
            style="margin: 50px 0 0 30px"
          >
            Add to Cart
          </button>
        </div>`;
  }
  contentHTMLDiv += contProDiv;
};
document.getElementById("item_lst").innerHTML = contentHTMLDiv;
