import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { UserComponent } from './user/user.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    NavSidebarComponent,
    NavbarComponent,
    UserComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
})
export class HomeComponent {}
