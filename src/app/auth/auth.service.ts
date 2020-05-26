import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  //url de connexion à l'API
  private urlLogin: string = 'http://localhost:8080/cours/pokemonsJwt/public/api/login_check';

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string) {
    console.log("login: "+login+" password: "+password);
    console.log("url: "+this.urlLogin);
    return this.httpClient.post<{ token: string }>(this.urlLogin, { username:login, password:password })
    .pipe(tap(res => {
      localStorage.setItem('token', res.token);
    }))
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get isLoggedIn(): boolean{
    return localStorage.getItem('token') !==  null;
  }

  getToken(): string{
    return localStorage.getItem('token');
  }
}
