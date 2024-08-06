
import { ProductDetail } from "./product-detail.model";

export interface User {
    _id: string;
    username: string;
    email: string;
    cart: Array<CartItem>;
  }

export interface CartItem {
    objectId: string;  // Either object Name or Reference Id in string Format
    count: number;
  }

export interface CartItemExtended{
  checked: boolean;  // is user going to buy this now (connects with the check box)
  product: ProductDetail;
  cart: CartItem;
}