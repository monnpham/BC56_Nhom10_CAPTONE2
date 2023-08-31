const BASE_URL = "https://64d46348b592423e46941248.mockapi.io/Products";

let getProList = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};

let getDetail = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};

let productsUserServ = {
  getProList,
  getDetail,
};

export default productsUserServ;
