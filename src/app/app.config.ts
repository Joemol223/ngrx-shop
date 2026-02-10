import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productReducer } from './features/products/store/product.reducer';
import { cartReducer } from './features/cart/store/cart.reducer';
import { ProductEffects } from './features/products/store/product.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({products: productReducer, cart:cartReducer}),
    provideEffects([ProductEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
