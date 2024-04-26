import { ProductService } from './../../services/product.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Iproduct[];
  constructor(public ProductService: ProductService) {
    this.products = [];
  }
  ngOnInit(): void {
    this.products = this.ProductService.getAllProducts();
  }

  deleteHandler(productId: number) {
    this.products = this.ProductService.deleteProduct(productId);
  } }