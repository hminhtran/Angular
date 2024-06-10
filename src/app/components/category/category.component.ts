import { Component, Input } from '@angular/core';
import { Product } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() Product !: Product;
}
