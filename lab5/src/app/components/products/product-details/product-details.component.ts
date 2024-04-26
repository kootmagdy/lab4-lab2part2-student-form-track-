import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../models/iproduct';
import { ProductWihApiService } from '../../../services/product-wih-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productId: any;
  product?: any;
  mySub: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productServices: ProductWihApiService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.mySub = this.productServices.getProductById(this.productId).subscribe({
      next: (data) => {
        console.log(data);
        this.product = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.mySub.unsubscribe();
  }
  backToProducts() {
    this.router.navigate(['/products']);
  }
}
