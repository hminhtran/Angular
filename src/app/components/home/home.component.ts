import { Component, Input, inject } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ProductList: Product[] = [];
  ProductBest: Product[]= [];
  ProductService: ProductsService = inject(ProductsService);
  constructor() {
    this.ProductService.getAllProducts().then((ProductList: Product[]) => {
      this.ProductList = ProductList;
    });
    {
      this.ProductService.getProDuctLimit().then((ProductBest: Product[]) =>{
        this.ProductBest = ProductBest;})
    }
  
  }
}
