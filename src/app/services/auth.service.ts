import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  authStatus = this.loggedIn.asObservable();

  private userInfo = new BehaviorSubject<any>(null);
  userInfoStatus = this.userInfo.asObservable();

  login(user: any) {
    this.loggedIn.next(true);
    this.userInfo.next(user);
  }

  logout() {
    this.loggedIn.next(false);
    this.userInfo.next(null);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }

  getUserInfo(): any {
    return this.userInfo.getValue();
  }
}