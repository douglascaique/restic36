import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService as Auth0Service, User } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.authenticatedSubject.asObservable();

  constructor(private http: HttpClient, private auth0Service: Auth0Service) {
    this.auth0Service.user$.subscribe((user: User | null | undefined) => {
      if (user) {
        this.http.get<any[]>(`http://localhost:3000/users?email=${user.email}`).subscribe(users => {
          if (users.length > 0) {
            this.authenticatedSubject.next(true);
          } else {
            this.authenticatedSubject.next(false);
          }
        });
      } else {
        this.authenticatedSubject.next(false);
      }
    });
  }

  login() {
    this.auth0Service.loginWithRedirect();
  }

  logout() {
    this.auth0Service.logout();
    // Redireciona manualmente após o logout
    window.location.href = window.location.origin;
  }
}