import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../providers/user.provider';
import { RegisterUser } from '../models/user/register-user';
import { environment } from 'src/environments/environment.development';
import { TokenModel } from '../models/user/token-model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "User";

  constructor(private httpClient: HttpClient,
      private userProvider: UserProvider) { }

  register(email: string, password: string, confirmPassword: string) {
    return this.httpClient.post<RegisterUser>(`${environment.apiUrl}/${this.url}/register`, {
      email,
      password,
      confirmPassword
    });
  }

  private static setToken(tokenModel: TokenModel | null): void {
    if (tokenModel) {
      localStorage.setItem('token', tokenModel.token);
      localStorage.setItem('token-exp', tokenModel.expiresAt.toString());
    } else {
      this.removeLocalStorageItems();
    }
  }

  private static removeLocalStorageItems(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('token-exp');
  }

  login(email: string, password: string) {
    return this.httpClient
      .post(`${environment.apiUrl}/${this.url}/login`, { email, password })
      .pipe(
        tap((tokenResponse: any) => {
              UserService.setToken(tokenResponse);
              this.isAuthenticated();
        }),
      );
  }

  logout(): void {
    UserService.setToken(null);
    this.userProvider.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  get token(): string|null {
    const expDate = new Date(localStorage.getItem('token-exp') as string);
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  get expiredAt(): Date {
    const expDate = localStorage.getItem('token-exp');

    return expDate
      ? new Date(expDate)
      : new Date();
  }
}