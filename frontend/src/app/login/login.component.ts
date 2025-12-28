import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    template: `
    <div class="login-container">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" [(ngModel)]="username" name="username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" [(ngModel)]="password" name="password">
      </div>
      <button (click)="onLogin()">Login</button>
      <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  `,
    styles: [`
    .login-container { width: 300px; margin: 50px auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; }
    .form-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; }
    input { width: 100%; padding: 8px; box-sizing: border-box; }
    button { width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; cursor: pointer; }
    button:hover { background-color: #0056b3; }
    .error { color: red; margin-top: 10px; }
  `]
})
export class LoginComponent {
    username = '';
    password = '';
    errorMessage = '';

    constructor(private authService: AuthService, private router: Router) { }

    onLogin() {
        this.authService.login(this.username, this.password).subscribe({
            next: () => this.router.navigate(['/dashboard']),
            error: () => this.errorMessage = 'Invalid username or password'
        });
    }
}
