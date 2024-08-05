import { Injectable } from '@angular/core';
//import { AuthService } from './auth.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService { //Services related Cart of a user 
  //user: User | undefined;
  private apiUrl = 'http://localhost:3000/user'; // Replace with your actual API endpoint



  constructor(private http: HttpClient  ) {}

  updateCart(email:string, ObjectId: string,new_count: Number): Observable<any>{ // this includes delete item
    const url = `${this.apiUrl}/update_cart`;
    return this.http.post<any>(url,{email:email, objectId:ObjectId, quantity:new_count});
  }

  addToCart(email:string, ObjectId: string): Observable<any>{ // Add a item to cart
    const url = `${this.apiUrl}/add_to_cart`
    return this.http.post<any>(url,{email:email, objectId:ObjectId});
  }

  

}