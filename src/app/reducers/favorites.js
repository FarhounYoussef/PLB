import ACTIONS from '../constante';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FAVORITE_ADD: {
      return [...state, action.product.id];
    }
    case ACTIONS.FAVORITE_REMOVE: {
      return [...state.filter(id => id !== action.product.id)];
    }
    default:
      return state;
  }
};

// [id1,id2]
