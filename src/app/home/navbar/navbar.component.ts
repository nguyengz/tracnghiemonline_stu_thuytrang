import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false;
  ngOnInit(): void {
    this.isAdmin = this.getUserRole() === 'ADMIN';
    this.getUserRole();
  }
  getUserRole(): string | '' {
    const user = JSON.parse(localStorage.getItem('authUser') || 'null');
    return user?.roleName || '';
  }
  getRole(roleID: number) {
    localStorage.setItem('RID', JSON.stringify({ role: roleID }));
  }
}
