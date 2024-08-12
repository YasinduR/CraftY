import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductDetail } from '../../models/product-detail.model';
import { AuthService } from '../../services/auth.service';
import { LoginRequiredPopUpComponent } from '../login-required-pop-up/login-required-pop-up.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductDetail | undefined;
  user: User | undefined;

  currentImageIndex: number = 0;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private cartSevice: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const ref = this.route.snapshot.paramMap.get('_id');
    this.user = this.authService.getUserInfo(); 
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

  AddToCart():void{
    if(this.product && this.user){
     const Cartitem= {objectId:this.product._id,count:1} // New Cartitem
     const productId = this.product._id; // product id
     const exists = this.is_already_in_Cart(); // existance of the product in the user cart

      this.cartSevice.addToCart(this.user.email,this.product._id).subscribe({
        next: (result) => {
          if (!exists){
            this.user?.cart.push(Cartitem);
          }
          console.log(result)
        },
        error: (error) => {
          console.log(error)
        }}
      );
    }
    else{
      this.dialog.open(LoginRequiredPopUpComponent, {
        width: '300px',
      });
    }
    }

    RemoveFromCart():void{
      if(this.product && this.user){
        const index_a = this.user?.cart.findIndex(item => item.objectId ===this.product?._id);
        this.cartSevice.updateCart(this.user.email,this.product._id,0).subscribe({ // remove item => item count zero
          next: (result) => {
            if (index_a!==0){
              this.user?.cart.splice(index_a,1);
            }
            console.log(result)
          },
          error: (error) => {
            console.log(error)
          }}
        );
      }
      }



  is_already_in_Cart():boolean | undefined{ // check whether the product is already on the cart
    if (this.product && this.user){
      const productId = this.product._id; // product id
      return this.user.cart?.some(item => item.objectId ===productId)
  }
  else{
    return undefined
  }
  }
}
