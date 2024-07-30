import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
//import { Product } from '../../models/product.model';
import { ProductDetail } from '../../models/product-detail.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductDetail | undefined;
  currentImageIndex: number = 0;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const ref = this.route.snapshot.paramMap.get('_id');
    if(ref){
      this.productService.getProductById(ref).subscribe({
        next: (data) => {
          this.product = data;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      });
    }
  }


  nextImage(): void {
    if (this.product) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.imageurls.length;
    }  
  }

  prevImage(): void {
    if (this.product) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.product.imageurls.length) % this.product.imageurls.length;
    }
  }


}