import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css',
})
export class NavSidebarComponent implements OnInit {
  username!: string;
  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('authUser') || '');
    this.username = userInfo.email;
    console.log(this.username);
  }
  authService = inject(AuthService);
  router = inject(Router);

  // public logout() {

  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }
  public logout() {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
