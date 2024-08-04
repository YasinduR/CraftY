import { Component } from '@angular/core';
import { CartItem, CartItemExtended, User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { ProductDetail } from '../../models/product-detail.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  user: User | undefined;
  cart: Array<CartItem>= [];// Item Name and Count added BY user the wishlist
  cart_detailed:Array<CartItemExtended> =[]; // Item Name and Count added , images stock availability

  constructor(private authService: AuthService,private productService:ProductService, private cartService:CartService ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserInfo(); 
    if(this.user){
      this.fetchProductDetails()
    }
  }

  fetchProductDetails(): void {
    this.user?.cart.forEach(item => {
      this.productService.getProductToCart(item.objectId).subscribe(product => {
        const new_item:CartItemExtended={product:product,cart:item};
        this.cart_detailed.push(new_item); 
      })
      });
    };

  updateCount(mail:string,objectID: string,current_count: number) : void{ 
    // Update cartitem count for given mail and cartitem object in Both Mongodb and current interface(cart_detailed array)
    this.cartService.updateCart(mail,objectID,current_count).subscribe({
      next:(data)=>{
      // change the interface one vaerified that it is updated in database
    
      const cartItem = this.cart_detailed.find((item: { cart: { objectId: string; }; }) => item.cart.objectId === objectID);
      if (cartItem) { 
        if(current_count==0){// delete item
          // find index of the item to remove
          const index = this.cart_detailed.findIndex(item => item.cart.objectId ===objectID);
          // find index of the object ==> otherwise returns -1
          if (index !== -1) { // remove by index only if item exist
            this.cart_detailed.splice(index, 1);
          }
          if (this.user?.cart){
            const index_a = this.user?.cart.findIndex(item => item.objectId ===objectID);
            this.user.cart.splice(index_a,1);
          }
        }
        else{
          cartItem.cart.count = current_count;
        }
        
      }
        console.log('update successful', data ,this.cart_detailed,cartItem);
      },
      error: (error) => {
        console.error('Update failed', error);
      }
    }
    )
  };
  
}
