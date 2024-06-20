import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [authGuard],
  },
];
