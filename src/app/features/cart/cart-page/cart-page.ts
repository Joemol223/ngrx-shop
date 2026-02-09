import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotal,selectCartCount } from '../store/cart.selectors';
import { Observable } from 'rxjs';
import { Product } from '../../products/store/product.state';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart-page',
  imports: [CommonModule],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
 cartItems$: Observable<{ product: Product; quantity: number }[]>;
 total$: Observable<number>;
 count$: Observable<number>;


  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.total$ = this.store.select(selectCartTotal);
    this.count$ = this.store.select(selectCartCount);
  }
}
