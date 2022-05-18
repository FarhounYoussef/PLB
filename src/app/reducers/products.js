import ACTIONS from '../constante';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.PRODUCTS_START: {
      return {...state, loading: true};
    }
    case ACTIONS.PRODUCTS_SUCCESS: {
      return {error: false, loading: false, data: action.products};
    }
    case ACTIONS.PRODUCTS_ERROR: {
      return {...state, error: true, loading: false};
    }
    default:
      return state;
  }
};
