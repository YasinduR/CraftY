import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
    { id: 2, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
    { id: 3, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
    { id: 4, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
    { id: 5, name: 'Product 1', price: 100,imageurl:'https://images.squarespace-cdn.com/content/v1/568c47f57086d7219d18c91b/1605373760088-8Q414GGOLWOO80PADTI5/DIY+Holiday+Decoration+Ornament+Costume+Jewelry+Homemade+by+Joanne+Palmisano+Photo+by+Susan+Teare.jpeg' },
    { id: 6, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
    { id: 7, name: 'Bracelets Collection', price: 200,imageurl:'https://raisingteenstoday.com/wp-content/uploads/2021/03/DIY-Crafts-for-Teens-21-1.jpg' },
    { id: 8, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
    { id: 9, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
    { id: 10, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
    //'../assests/dummy_products/p1.jpg'
    //
   //{ id: '2', name: 'Product 2', price: 200 },
    //{ id: '3', name: 'Product 3', price: 300 },
    //{ id: '4', name: 'Product 4', price: 100 },
  //  { id: '5', name: 'Product 5', price: 200 },
   // { id: '6', name: 'Product 6', price: 300 },
   // { id: '7', name: 'Product 1', price: 100 },
   // { id: '8', name: 'Product 2', price: 200 },
   // { id: '9', name: 'Product 3', price: 300 },
   // { id: '10', name: 'Product 4', price: 100 },
   // { id: '11', name: 'Product 5', price: 200 },
   // { id: '12', name: 'Product 6', price: 300 },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}