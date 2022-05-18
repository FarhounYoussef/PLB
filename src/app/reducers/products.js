import ACTIONS from '../constante';

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT: {
      return [
        ...state,
        {
          id: action.product.id,
          product: action.product.product,
          prix: action.product.prix,
          image: action.product.image,
          stock: action.product.stock,
        },
      ];
    }
    case ACTIONS.ADD_PRODUCTS: {
      return [
        ...state,
        ...action.products.map(product => ({
          id: product.id,
          product: product.product,
          prix: product.prix,
          image: product.image,
          stock: product.stock,
        })),
      ];
    }
    default:
      return state;
  }
};
