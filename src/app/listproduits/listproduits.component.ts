import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent implements OnInit {
  lesProduits:Product[]=[];
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.lesProduits = this.productService.getProducts();
  }

}
