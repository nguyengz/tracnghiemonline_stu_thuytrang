import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [NavSidebarComponent, NavbarComponent, HeaderComponent],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
