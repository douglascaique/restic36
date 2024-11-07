import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>Login</h2>
      <button (click)="login()">Login</button>
    </div>
  `,
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }
}
