import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    template: `
    <div style="text-align:center; margin-top: 50px;">
      <h2>Register</h2>
      <form (ngSubmit)="onRegister()">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" [(ngModel)]="username" name="username" required>
        </div>
        <div style="margin-top: 10px;">
          <label for="password">Password:</label>
          <input type="password" id="password" [(ngModel)]="password" name="password" required>
        </div>
        <button type="submit" style="margin-top: 20px;">Register</button>
      </form>
      <div style="margin-top: 20px;">
        <a routerLink="/login">Already have an account? Login</a>
      </div>
    </div>
  `,
    styles: []
})
export class RegisterComponent {
    username = '';
    password = '';

    constructor(private authService: AuthService, private router: Router) { }

    onRegister() {
        this.authService.register(this.username, this.password).subscribe({
            next: () => {
                alert('Registration successful! Please login.');
                this.router.navigate(['/login']);
            },
            error: (err) => {
                alert('Registration failed: ' + (err.error || 'Unknown error'));
            }
        });
    }
}
