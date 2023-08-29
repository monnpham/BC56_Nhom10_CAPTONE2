const BASE_URL = "https://64d46348b592423e46941248.mockapi.io/Products";

let getProList = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};

let productsUserServ = {
  getProList,
};

export default productsUserServ;
