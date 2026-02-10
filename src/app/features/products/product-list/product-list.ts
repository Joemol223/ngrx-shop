import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllProducts } from '../store/product.selectors';
import { loadProducts } from '../store/product.actions';
import { Observable } from 'rxjs';
import { Product } from '../store/product.state';
// import { addProduct, removeProduct } from '../store/product.action';
import { CommonModule } from '@angular/common';
import * as CartActions from '../../cart/store/cart.actions';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectAllProducts);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }

  addToCart(product: Product) {
    this.store.dispatch(CartActions.addToCart({ product }));
  }
}
