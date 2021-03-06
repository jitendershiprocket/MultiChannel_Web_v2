import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return 'Bearer ' + localStorage.satellizer_token;
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    // localStorage.removeItem("LoggedInUser");
    // this.myRoute.navigate(["login"]);
    delete localStorage.USER;
    delete localStorage.menuItems;
    delete localStorage.channelErrorShown;
    delete window.localStorage.satellizer_token;
    window.location.href = "http://dev-web.kartrocket.com/login";
  }
}
