import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="layout-container">
      <nav class="sidebar">
        <h3>Menu</h3>
        <ul>
          <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
          <li><a routerLink="/users" routerLinkActive="active">User Management</a></li>
        </ul>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
    styles: [`
    .layout-container { display: flex; height: 100vh; }
    .sidebar { width: 250px; background: #333; color: white; padding: 20px; }
    .sidebar h3 { color: #fff; border-bottom: 1px solid #555; padding-bottom: 10px; }
    .sidebar ul { list-style: none; padding: 0; }
    .sidebar li { margin-bottom: 10px; }
    .sidebar a { color: #ccc; text-decoration: none; display: block; padding: 10px; border-radius: 4px; }
    .sidebar a:hover, .sidebar a.active { background: #555; color: white; }
    .content { flex: 1; padding: 20px; overflow-y: auto; }
  `]
})
export class MainLayoutComponent { }
