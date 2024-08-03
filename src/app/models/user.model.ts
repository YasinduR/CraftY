
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
  product: ProductDetail;
  cart: CartItem;
}