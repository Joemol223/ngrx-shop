import { createReducer } from '@ngrx/store';
import { initialState } from './product.state';

export const productReducer =
  createReducer(initialState);
