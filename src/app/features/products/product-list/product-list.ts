import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllProducts } from '../store/product.selectors';
import { Observable } from 'rxjs';
import { Product } from '../store/product.state';
import { addProduct, removeProduct } from '../store/product.action';
import { CommonModule } from '@angular/common';

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

    addRandomProduct() {
    const id = Math.floor(Math.random() * 1000);
    this.store.dispatch(addProduct({ product: { id, title: 'New Product', price: 100 } }));
  }

  removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }
}
