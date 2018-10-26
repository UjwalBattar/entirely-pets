import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const fetchProducts = filters => dispatch => {
  ProductApiUtil.fetchProducts(filters).then(products =>
    dispatch(receiveProducts(products))
  );
};
