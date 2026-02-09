import { createReducer, on } from '@ngrx/store';
import { initialState } from './product.state';
import { addProduct,removeProduct } from './product.action';

export const productReducer =
  createReducer(
    initialState,
    on(addProduct, (state, { product }) => ({
      ...state,
      products: [...state.products, product]
    })),
    on(removeProduct, (state, { id }) => ({
      ...state,
      products: state.products.filter(p => p.id !== id)
    }))
  );
