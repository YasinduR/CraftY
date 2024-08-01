import { Component } from '@angular/core';
import { CartItem, User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: User | undefined;
  cart: Array<CartItem>= []; // Item Name and Count added t the wishlist

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
        this.cart.push({ objectId: product.name, count: item.count }); 
        //Only name of the product fetched here(replaced to the object ID)
      });
    });
  }
  
}
