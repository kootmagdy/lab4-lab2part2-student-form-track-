import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent  implements OnInit {
  productId: any;
  product?: Iproduct;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productServices: ProductService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.product = this.productServices.getProductById(this.productId);
    console.log(this.product);
  }

  backToProducts() {
    //
    this.router.navigate(['/products']);
  }
}


