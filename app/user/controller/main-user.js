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


var cartProUser = [];
window.add2Cart = (id) => {
  console.log(id);
  productsUserServ
    .getDetail(id)
    .then((res) => {
      let dataCart = getInfo2Cart(res.data);
      console.log(dataCart);
      var arrCartUser = Object.values(dataCart);
      console.log(arrCartUser);
      
    })
    .catch((err) => {
      console.log(err);
    });
};
