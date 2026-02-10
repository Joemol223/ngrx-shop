import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';
import { CartPage } from './features/cart/cart-page/cart-page';
import { CommonModule } from '@angular/common';
import { selectCartCount } from './features/cart/store/cart.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ ProductList, CartPage, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngrx-shop');
    cartCount$!: Observable<number>;  
    constructor(private store: Store) {
     this.cartCount$ = this.store.select(selectCartCount);
     console.log('Cart Count Observable:', this.cartCount$.subscribe(count => console.log('Cart Count:', count)));
    }
}
