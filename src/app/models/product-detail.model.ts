export interface ProductDetail {
    _id: string;
    ref_id: string;
    name: string;
    price: number;
    imageurls: Array<string>;
    stock: number;
    description:string;
  }