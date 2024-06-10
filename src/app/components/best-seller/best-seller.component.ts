import { Component, Input, inject } from '@angular/core';
import { Product } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent {
  @Input() Product !: Product
}
