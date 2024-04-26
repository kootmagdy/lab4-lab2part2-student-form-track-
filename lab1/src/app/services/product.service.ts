import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productsList } from '../models/productlist/productsList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Iproduct[] = [];
  constructor() {
    this.products = productsList;
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getProductById(productId: number): Iproduct | undefined {
    return this.products.find((product) => product.id == productId);
  }

  addNewProduct(product: Iproduct) {
    this.products.push(product);

    return this.products;
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter((product) => product.id != productId);
    return this.products;
  }
  
  editProduct(productId: number, updatedProduct: Iproduct): void {
    const index = this.products.findIndex((product) => product.id === productId);
    
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
  
  }
  

  
