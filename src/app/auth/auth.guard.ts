import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

interface AllowedRoles {
  [key: string]: string[];
}
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    const userRole = authService.getUserRole();

    // Định nghĩa các vai trò được phép truy cập cho mỗi trang
    const allowedRoles: AllowedRoles = {
      '/admin/users': ['admin', 'manager'],
      '/admin/question': ['admin', 'teacher'],
      '/admin/exam': ['admin', 'teacher'],
      '/admin/exam/add': ['admin', 'teacher'],
      '/admin/exam/list': ['admin', 'teacher'],
      // Thêm các trang và vai trò được phép truy cập tương ứng
    };

    // Kiểm tra xem vai trò của người dùng có được phép truy cập vào trang hiện tại không
    if (allowedRoles[state.url]?.includes(userRole)) {
      return true; // Cho phép người dùng truy cập
    }
    // } else {
    //   this.router.navigate(['/login']); // Chuyển hướng người dùng đến trang đăng nhập
    //   return false; // Không cho phép người dùng truy cập
    // }
  }
  router.navigate(['/login']);
  return false;
};
