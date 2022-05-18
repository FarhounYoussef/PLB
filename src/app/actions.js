import ACTIONS from './constante';

export const productsStart = () => ({
  type: ACTIONS.PRODUCTS_START,
});

export const productsSuccess = data => ({
  type: ACTIONS.PRODUCTS_SUCCESS,
  products: data,
});

export const productsError = () => ({
  type: ACTIONS.PRODUCTS_ERROR,
});

export const fetchProducts = () => {
  return dispatch => {
    dispatch(productsStart());
    fetch('https://edb5-196-127-7-74.ngrok.io/products')
      .then(result => result.json())
      .then(result => {
        dispatch(productsSuccess(result));
      })
      .catch(() => {
        dispatch(productsError());
      });
  };
};

export const addFavorite = data => ({
  type: ACTIONS.FAVORITE_ADD,
  product: data,
});

export const removeFavorite = data => ({
  type: ACTIONS.FAVORITE_REMOVE,
  product: data,
});
