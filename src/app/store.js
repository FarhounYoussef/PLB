import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './reducers/products';
import favoritesReducer from './reducers/favorites';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
});
