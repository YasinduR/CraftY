import { Component } from '@angular/core';
import { CartItem, User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { ProductDetail } from '../../models/product-detail.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  user: User | undefined;
  cart: Array<CartItem>= [];// Item Name and Count added BY user the wishlist
  cart_detailed:[ProductDetail,CartItem][] =[]; // Item Name and Count added , images stock availability

  constructor(private authService: AuthService,private productService:ProductService ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserInfo(); 
    if(this.user){
      this.fetchProductDetails()
    }
  }

  fetchProductDetails(): void {
    this.user?.cart.forEach(item => {
      this.productService.getProductToCart(item.objectId).subscribe(product => {
        this.cart_detailed.push([product, item]); 
        //Only name of the product fetched here(replaced to the object ID)
      });
    });
  }

  
  

}
