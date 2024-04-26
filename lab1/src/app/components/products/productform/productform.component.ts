
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productsList } from '../../../models/productlist/productsList';
import { Iproduct } from '../../../models/iproduct';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productform.component.html',
  styleUrl: './productform.component.css'
})
export class ProductformComponent implements OnInit {
  name: string = '';
  price: number = 0;
  quantity: number = 0;
  description: string = '';
  image: string = '';
  productId: any;
  product: any;
  constructor(
    public productServices: ProductService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId != 0) {
      this.product = this.productServices.getProductById(this.productId);
      this.image = this.product.image;
      this.name = this.product.name;
      this.price = this.product.price;
      this.quantity = this.product.quantity;
      this.description = this.product.description;
    }
  }

  productHandler() {

    const updatedProduct: Iproduct = {
      id: this.productId,
      image: this.image,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      description: this.description
    };




    if (this.productId == 0) {
      let id = productsList.length + 1;
      let newProduct: Iproduct = {
        id,
        image: this.image,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        description: this.description,
    

      };
      this.productServices.addNewProduct(newProduct);
      this.router.navigate(['/products']);
    } else {
      this.productServices.editProduct(this.productId, updatedProduct);
      this.router.navigate(['/products']);
    }
  }

}
