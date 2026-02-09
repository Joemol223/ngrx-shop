export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [
    { id: 1, title: 'Laptop', price: 1200 },
    { id: 2, title: 'Phone', price: 800 },
    { id: 3, title: 'Headphones', price: 200 }
  ]
};
