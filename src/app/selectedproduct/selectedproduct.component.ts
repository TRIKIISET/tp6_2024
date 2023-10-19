import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'ani-selectedproduct',
  templateUrl: './selectedproduct.component.html',
  styleUrls: ['./selectedproduct.component.css']
})
export class SelectedproductComponent implements OnInit{

  idYassine!:number;
  p!: Product |undefined;
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService){}
  ngOnInit(): void {
     this.idYassine = this.activatedRoute.snapshot.params['idTaleb'];
     this.p = this.productService.getProductById(this.idYassine);
  }

}
