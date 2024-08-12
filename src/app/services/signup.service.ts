import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl = 'http://localhost:3000/register'; //

  constructor(private http: HttpClient) {}

  signup(username:string, email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username,email, password });
  }
}
