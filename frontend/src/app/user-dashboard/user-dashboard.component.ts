import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user-dashboard',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="user-dashboard">
      <h2>User Management</h2>

      <div class="controls">
        <input type="text" [(ngModel)]="searchTerm" (input)="onSearch()" placeholder="Search users...">
        <button (click)="openAddModal()">Add User</button>
      </div>

      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of paginatedUsers">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>
              <button (click)="openEditModal(user)">Edit</button>
              <button (click)="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button (click)="prevPage()" [disabled]="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button (click)="nextPage()" [disabled]="currentPage === totalPages">Next</button>
      </div>

      <!-- Simple Modal for Add/Edit -->
      <div class="modal" *ngIf="showModal">
        <div class="modal-content">
          <h3>{{ isEditMode ? 'Edit User' : 'Add User' }}</h3>
          <label>Username: <input [(ngModel)]="currentUser.username"></label>
          <label>Password: <input type="password" [(ngModel)]="currentUser.password" placeholder="Leave blank to keep unchanged"></label>
          <div class="modal-actions">
            <button (click)="saveUser()">Save</button>
            <button (click)="closeModal()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .user-dashboard { padding: 20px; }
    .controls { display: flex; justify-content: space-between; margin-bottom: 20px; }
    .controls input { padding: 8px; width: 300px; }
    .controls button { padding: 8px 15px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th, .data-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    .data-table th { background-color: #f2f2f2; }
    .pagination { margin-top: 20px; display: flex; justify-content: center; align-items: center; gap: 10px; }
    .modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; }
    .modal-content { background: white; padding: 20px; border-radius: 5px; width: 400px; display: flex; flex-direction: column; gap: 15px; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 10px; }
    input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
  `]
})
export class UserDashboardComponent implements OnInit {
    users: any[] = [];
    filteredUsers: any[] = [];
    paginatedUsers: any[] = [];
    searchTerm: string = '';
    currentPage: number = 1;
    pageSize: number = 10;
    totalPages: number = 1;

    showModal: boolean = false;
    isEditMode: boolean = false;
    currentUser: any = { username: '', password: '' };

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers() {
        this.userService.getUsers().subscribe(data => {
            this.users = data;
            this.filterUsers();
        });
    }

    onSearch() {
        this.currentPage = 1;
        this.filterUsers();
    }

    filterUsers() {
        let temp = this.users;
        if (this.searchTerm) {
            temp = temp.filter(u => u.username.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
        this.filteredUsers = temp;
        this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize) || 1;
        this.updatePagination();
    }

    updatePagination() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.paginatedUsers = this.filteredUsers.slice(start, end);
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updatePagination();
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updatePagination();
        }
    }

    openAddModal() {
        this.isEditMode = false;
        this.currentUser = { username: '', password: '' };
        this.showModal = true;
    }

    openEditModal(user: any) {
        this.isEditMode = true;
        this.currentUser = { ...user, password: '' }; // Don't show hash, allow blank to keep
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }

    saveUser() {
        if (this.isEditMode) {
            this.userService.updateUser(this.currentUser.id, this.currentUser).subscribe(() => {
                this.loadUsers();
                this.closeModal();
            });
        } else {
            this.userService.createUser(this.currentUser).subscribe({
                next: () => {
                    this.loadUsers();
                    this.closeModal();
                },
                error: (err) => alert(err.error || 'Error creating user') // Simple error handling
            });
        }
    }

    deleteUser(id: number) {
        if (confirm('Are you sure you want to delete this user?')) {
            this.userService.deleteUser(id).subscribe(() => this.loadUsers());
        }
    }
}
