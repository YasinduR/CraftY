import { Injectable } from '@angular/core';
//import { AuthService } from './auth.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //user: User | undefined;
  private apiUrl = 'http://localhost:3000/user/update_cart'; // Replace with your actual API endpoint



  constructor(private http: HttpClient  ) {}

  updateCart(email:string, ObjectId: string,new_count: Number): Observable<any>{
    console.log(email,ObjectId,new_count)
    return this.http.post<any>(this.apiUrl,{email:email, objectId:ObjectId, quantity:new_count});
  }

}