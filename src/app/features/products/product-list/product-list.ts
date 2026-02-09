import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllProducts } from '../store/product.selectors';
import { Observable } from 'rxjs';
import { Product } from '../store/product.state';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
 products$: Observable<Product[]> =
    this.store.select(selectAllProducts);

  constructor(private store: Store) {}
}
