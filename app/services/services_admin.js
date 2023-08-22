const BASE_URL = "https://64d46348b592423e46941248.mockapi.io/Products"

let getList = () => {
    return axios({
        url: BASE_URL,
        method: "GET",
    });
};
let deleteProduct = (id) => {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "DELETE"
    });
};

let addProduct = (product) => {
    return axios({
        url: BASE_URL,
        method: "POST",
        data: product,
    });
};
//getDetail
let getDetail = (id) => {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "GET",
    });
};

function updateProduct(id, products) {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "PUT",
        data: products,
    });
}
let productsServ = {
    getList,
    deleteProduct,
    addProduct,
    getDetail,
    updateProduct,
};

export default productsServ;