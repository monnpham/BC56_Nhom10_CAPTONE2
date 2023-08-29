import productsServ from "../../admin/services/services_admin.js";
import { userRenderProductsList } from "./controller-user.js";

let userFetchProductList = () => {
  productsServ
    .getList()
    .then((res) => {
      console.log(res);
      userRenderProductsList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
userFetchProductList();
