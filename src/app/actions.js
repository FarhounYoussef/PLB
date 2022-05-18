import ACTIONS from './constante';

export const getProducts = data => ({
  type: ACTIONS.ADD_PRODUCTS,
  products: data,
});
