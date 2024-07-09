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
    // const userRole = authService.getUserRole();
    // console.log(userRole);
    // // Định nghĩa các vai trò được phép truy cập cho mỗi trang
    // const allowedRoles: AllowedRoles = {
    //   '/admin': ['ADMIN', 'LECTURERS'],
    //   '/admin/users': ['ADMIN'],
    //   '/admin/question': ['ADMIN', 'LECTURERS'],
    //   '/admin/exam': ['ADMIN', 'LECTURERS'],
    //   '/admin/exam/add': ['ADMIN', 'LECTURERS'],
    //   '/admin/exam/list': ['ADMIN', 'LECTURERS'],
    //   // Thêm các trang và vai trò được phép truy cập tương ứng
    // };

    // // Kiểm tra xem vai trò của người dùng có được phép truy cập vào trang hiện tại không
    // if (allowedRoles[state.url]?.includes(userRole)) {
    //   console.log('aaa' + allowedRoles);
    //   return true; // Cho phép người dùng truy cập
    // } else {
    //   return false;
    // }
    return true;
  }
  router.navigate(['/login']);
  return false;
};
