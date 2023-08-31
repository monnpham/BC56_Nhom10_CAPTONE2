import productsServ from "../services/services_admin.js";
import {
  getInfor,
  onFail,
  onSuccess,
  showDataForm,
  renderProductsList,
  valid_data,
  new_data,
} from "./controller-admin.js";

let fetchProductList = () => {
  productsServ
    .getList()
    .then((res) => {
      console.log(res);
      renderProductsList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchProductList();

window.addpro = () => {
  new_data();
  // valid_data(data);
};
window.addProduct = () => {
  let data = getInfor();
  console.log(valid_data(data))
  if (!valid_data(data)) {
    productsServ
      .addProduct(data)
      .then((res) => {
        onSuccess("Add Success");
        $("#exampleModal").modal("hide");
        fetchProductList();
      })
      .catch((err) => {
        console.log(err);
      });
  } else onFail("Add Fail!");
};

let deleteProduct = (id) => {
  productsServ
    .deleteProduct(id)
    .then((res) => {
      console.log(res);
      onSuccess("Delete Success");
      fetchProductList();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.deleteProduct = deleteProduct;

window.editProduct = (id) => {
  console.log("🚀 ~ file: main-admin.js:61 ~ id:", id)
  $("#exampleModal").modal("show");
  productsServ
    .getDetail(id)
    .then((res) => {
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.updateProduct = () => {
  let data = getInfor();
  if (!valid_data(data)) {
    productsServ
      .updateProduct(data.id, data)
      .then((res) => {
        fetchProductList();
        onSuccess("Update Success");
        $("#exampleModal").modal("hide");
      })
      .catch((err) => {
        console.log(err);
      });
  } else onFail("Update Fail!");
};
