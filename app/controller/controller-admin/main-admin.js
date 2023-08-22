import productsServ from "../../services/services_admin.js";
import { getInfor, onSuccess, showDataForm, renderProductsList } from "../../controller/controller-admin/controller-admin.js";
// render food list
let fetchProductList = () => {
    productsServ.getList()
        .then((res) => {
            console.log(res);
            renderProductsList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
fetchProductList();

window.addProduct = () => {
    console.log("yes");
    let data = getInfor();
    productsServ
        .addProduct(data)
        .then((res) => {
            onSuccess("Add Success");
            $('#exampleModal').modal('hide');
            fetchProductList();

        })
        .catch((err) => {
            console.log(err);
        });
};
let deleteProduct = (id) => {
    productsServ.deleteProduct(id)
        .then((res) => {
            console.log(res);
            onSuccess("Delete Success");
            fetchProductList();
        })
        .catch((err) => {
            console.log(err);
        })
};
window.deleteProduct = deleteProduct;

window.editProduct = (id) => {
    $('#exampleModal').modal('show');
    productsServ
        .getDetail(id)
        .then((res) => {
            console.log(res);
            showDataForm(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

window.updateProduct = () => {
    let data = getInfor();
    productsServ.updateProduct(data.id, data)
        .then((res) => {
            fetchProductList();
            onSuccess("Update Success");
            $('#exampleModal').modal('hide');
        })
        .catch((err) => {
            console.log(err)
        })
}