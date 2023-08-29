import productsUserServ from "../services/services_user.js";
import { renderUserProductsList } from "./controller-user.js";

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
