import { createReducer, on } from '@ngrx/store';
import { initialState } from './cart.state';
import * as CartActions from './cart.action';

export const cartReducer = createReducer(

  initialState,

 on(CartActions.addToCart, (state, { product, quantity }) => {

  const existingItem = state.items.find(
    item => item.product.id === product.id
  );

  if (existingItem) {
    // If already exists → increase quantity
    return {
      ...state,
      items: state.items.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    };
  }

  // If not exists → add new item
  return {
    ...state,
    items: [...state.items, { product, quantity }]
  };
}),

  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.product.id !== productId)
  }))
);
