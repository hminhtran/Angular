import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // url = 'http://localhost:3000/products';
  url = 'https://fakestoreapi.com/products'

  async getAllProducts(): Promise<Product[]> {
    const DATA = await fetch('https://fakestoreapi.com/products');
    return (await DATA.json()) ?? [];
  }
  async getProDuctLimit() : Promise<Product[]> {
    const  DATA = await fetch('https://fakestoreapi.com/products?limit=5');
    return (await DATA.json()) ?? [];
  }
}
