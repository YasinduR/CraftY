import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'; // Make sure this import is correct

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products'; // Replace with your base URL

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}

//{ id: 1, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
  //  { id: 2, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
 //   { id: 3, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
 //   { id: 4, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
  //  { id: 5, name: 'Product 1', price: 100,imageurl:'https://images.squarespace-cdn.com/content/v1/568c47f57086d7219d18c91b/1605373760088-8Q414GGOLWOO80PADTI5/DIY+Holiday+Decoration+Ornament+Costume+Jewelry+Homemade+by+Joanne+Palmisano+Photo+by+Susan+Teare.jpeg' },
 //   { id: 6, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
  //  { id: 7, name: 'Bracelets Collection', price: 200,imageurl:'https://raisingteenstoday.com/wp-content/uploads/2021/03/DIY-Crafts-for-Teens-21-1.jpg' },
 //   { id: 8, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
  //  { id: 9, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
 //   { id: 10, name: 'Product 1', price: 100,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
 //   { id: 1, name: 'Wooden Scraping Handicraft Item', price: 200,imageurl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.indiamart.com%2Fproddetail%2Fhandicraft-item-18157794188.html&psig=AOvVaw0P1tVC_t7Bcx6qi2YB8B-N&ust=1722255933603000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj61sTdyYcDFQAAAAAdAAAAABAE' },
 // { id: 2, name: 'Staple Jewelry', price: 1000,imageurl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diamondstuds.com%2Fnews%2Fstaple-jewelry-items-for-her-versatile-wardrobe&psig=AOvVaw1nSbCY8WWMjLq4bhL1e_Ib&ust=1722256187087000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiysrTeyYcDFQAAAAAdAAAAABAE' },
 //   { id: 3, name: 'Nidin Romantic Letters Love Pendant', price: 100,imageurl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005004609247995.html&psig=AOvVaw1EujIcBWXv2e-Jx15ISFYv&ust=1722256232431000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiix9zeyYcDFQAAAAAdAAAAABAJ' },
  //  { id: 4, name: 'Small Bangle Bracelet', price: 1000,imageurl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.daraz.lk%2Fproducts%2Fesh-fancy-item-gold-new-arrived-free-size-small-bangle-bracelet-with-full-white-stone-for-women-gift-fit-for-any-hand-i122580776.html&psig=AOvVaw1UmTNJ1HXXqQhh6Wndx6jR&ust=1722256343829000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKix-4TfyYcDFQAAAAAdAAAAABAE' },
 //   { id: 5, name: 'decoration', price: 1000,imageurl:'https://images.squarespace-cdn.com/content/v1/568c47f57086d7219d18c91b/1605373760088-8Q414GGOLWOO80PADTI5/DIY+Holiday+Decoration+Ornament+Costume+Jewelry+Homemade+by+Joanne+Palmisano+Photo+by+Susan+Teare.jpeg' },
  //  { id: 6, name: '132 Color All In One Makeup Kit', price: 5000,imageurl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.com.lk%2Fen%2Fproduct%2FFFPZUYCLE-187-colors-professional-makeup-pallet-set-kit-combination-all-in-one-makeup-kit-for-women-full-kit-include-eye-shadows-lipstick-lip&psig=AOvVaw0M3_SW3cFzbbea3sRLL9qw&ust=1722256429493000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiM86rfyYcDFQAAAAAdAAAAABAE' },
//{ id: 7, name: 'flowers', price: 500,imageurl:'https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg' },
  //  { id: 8, name: 'Paw print bracelet', price: 1500,imageurl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clogau.co.uk%2Fproducts%2Fpaw-print-white-topaz-affinity-bead-bracelet&psig=AOvVaw1UmTNJ1HXXqQhh6Wndx6jR&ust=1722256343829000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKix-4TfyYcDFQAAAAAdAAAAABAK' },
   // { id: 9, name: 'decorative handicarft', price: 3000,imageurl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clogau.co.uk%2Fproducts%2Fpaw-print-white-topaz-affinity-bead-bracelet&psig=AOvVaw1UmTNJ1HXXqQhh6Wndx6jR&ust=1722256343829000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKix-4TfyYcDFQAAAAAdAAAAABAK' },
   // { id: 10, name: 'water drop jewwelery set', price: 10000,imageurl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jungle.lk%2Fproduct%2Fcharm-crystal-water-drop-pendant-necklaces-earrings-jewellery-set-blue_20806%2F&psig=AOvVaw1HBEwImv_SPKxFjga1L4qI&ust=1722256700559000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjX16jgyYcDFQAAAAAdAAAAABAe' },