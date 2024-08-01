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