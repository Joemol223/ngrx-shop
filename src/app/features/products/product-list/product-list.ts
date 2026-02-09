import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllProducts } from '../store/product.selectors';
import { Observable } from 'rxjs';
import { Product } from '../store/product.state';
import { addProduct, removeProduct } from '../store/product.action';
import { CommonModule } from '@angular/common';
import * as CartActions from '../../cart/store/cart.action';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
 products$: Observable<Product[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectAllProducts);
  }
  quantities: { [key: number]: number } = {};

addToCart(product: Product) {
  const quantity = this.quantities[product.id] || 1;

  this.store.dispatch(
    CartActions.addToCart({ product, quantity })
  );
}
}
