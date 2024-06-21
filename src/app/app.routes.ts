import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';
import { UserComponent } from './home/user/user.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'user',
  //   component: UserComponent,
  // },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'users',
        canActivate: [authGuard], // Add authGuard for user access (if needed)
        component: UserComponent,
      },
    ],
  },
];
