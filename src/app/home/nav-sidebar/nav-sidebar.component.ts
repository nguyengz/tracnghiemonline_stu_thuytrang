import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css',
})
export class NavSidebarComponent implements OnInit {
  ngOnInit(): void {}
}
