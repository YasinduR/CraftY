import { Component,SimpleChange,OnChanges } from '@angular/core';
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
  Total_price:number=0;

  constructor(private authService: AuthService,private productService:ProductService, private cartService:CartService ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserInfo(); 
    if(this.user){
      this.fetchProductDetails();
    }
  }

  fetchProductDetails(): void {
    this.user?.cart.forEach(item => {
      this.productService.getProductToCart(item.objectId).subscribe(product => {
        const new_item:CartItemExtended={checked:true,product:product,cart:item};
        this.cart_detailed.push(new_item); 
        this.Total_price += new_item.cart.count*new_item.product.price; // intially price of all in cart will be visible
      })
      });
    };
  


  private updateCount(mail:string,objectID: string,current_count: number) : void{ 
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
        this.updateTotal(); // update  the total
      },
      error: (error) => {
        console.error('Update failed', error);
      }
    }
    )
  };

  Addcount(objectId:string,count:number){ // Increment count
    if (this.user){
      this.updateCount(this.user.email, objectId, count + 1)
    }
  }

  Reducecount(objectId:string,count:number){ // Reduce count
    if (this.user && count>0){
      this.updateCount(this.user.email, objectId, count - 1)
    }
  }

  RemoveItem(objectId:string){ // Remove cart item
    if (this.user){
      this.updateCount(this.user.email, objectId, 0)
    }
  
  

  }




  onCheckboxChange(item: CartItemExtended) {  // For Testing perpose remove later
    console.log(`Checkbox for ${item.product.name} is now: ${item.checked}`);
    this.updateTotal();
    // Additional actions can be performed here if needed
  };

  updateTotal(){
    var total =0;
    for (const cartitem of this.cart_detailed) {
      if(cartitem.checked){
        total +=cartitem.product.price * cartitem.cart.count;
      }
    }
    this.Total_price = total
    console.log("Total changed to ",total)
  };

  isPurchasable(){
    var Purchasable = true;
    for (const cartitem of this.cart_detailed) {
      if(cartitem.checked && cartitem.product.stock<cartitem.cart.count){
        Purchasable = false
        return Purchasable
      }
    }
    return Purchasable

};
}
