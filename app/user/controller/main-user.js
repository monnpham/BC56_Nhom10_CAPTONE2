import productsUserServ from "../services/services_user.js";
import {
  renderUserProductsList,
  saveCart2Local,
  // showInfo2Cart,
  renderCartProList,
  getInfo2Cart,
} from "./controller-user.js";
import cartItem from "../model/Cart.js";

let userFetchProductList = () => {
  productsUserServ
    .getProList()
    .then((res) => {
      console.log(res);
      renderUserProductsList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
userFetchProductList();

// window.add2Cart = () => {
//   let data = getInfo2Cart();
//   let { id, name, price, img } = data;
//   let cartUserItem = new cartItem(id, name, price, img);
//   showInfo2Cart(cartUserItem);
// };

var cartProUser = [];
window.add2Cart = (id) => {
  let check = true
  console.log("🚀 ~ file: main-user.js:35 ~ cartProUser.length:", cartProUser.length)
  if (cartProUser.length > 0) {
    for (var i = 0; i < cartProUser.length; i++) {
      if (cartProUser[i].id == id) {
        cartProUser[i].quality = cartProUser[i].quality + 1
        renderCartProList(cartProUser)
        check = false
      }
    }
  }
  console.log("🚀 ~ file: main-user.js:44 ~ check:", check)
  if (check) {
    productsUserServ
      .getDetail(id)
      .then((res) => {
        let dataCart = getInfo2Cart(res.data);
        cartProUser.push(dataCart);
        // let { id, name, price, img } = dataCart;
        // let cartProItem = new cartItem(id, name, price, img);
        // renderCartProList(dataCart);
        // showInfo2Cart(dataCart);
        // for (var i = 0; i > cartProUser.length; i++) {
        //   renderCartProList(cartProUser[i])
        // }
        renderCartProList(cartProUser)

      })
      .catch((err) => {
        console.log(err);
      });
  }

};
// window.onload = function () {
//   if (getStorageJSON("cartJSValue")) {
//     //Lấy ra
//     cartJSValue = getStorageJSON("cartJSValue");
//     //Tạo table
//     // renderTableSinhVien(arrSinhVien);
//   }
// };
