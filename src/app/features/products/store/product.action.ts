// product.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from './product.state';

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Product] Remove Product',
  props<{ id: number }>()
);
