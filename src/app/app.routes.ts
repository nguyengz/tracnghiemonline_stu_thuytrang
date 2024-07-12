import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';
import { UserComponent } from './home/user/user.component';
import { QuestionComponent } from './home/question/question.component';
import { ExamComponent } from './home/exam/exam.component';
import { AddExamComponent } from './home/exam/add-exam/add-exam.component';
import { ListexamComponent } from './home/exam/listexam/listexam.component';
import { ExamDetailComponent } from './home/exam/exam-detail/exam-detail.component';

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
      {
        path: 'users/giangvien',
        canActivate: [authGuard], // Add authGuard for user access (if needed)
        component: UserComponent,
      },
      {
        path: 'question',
        canActivate: [authGuard], // Add authGuard for user access (if needed)
        component: QuestionComponent,
      },
      {
        path: 'exam',
        canActivate: [authGuard], // Add authGuard for user access (if needed)
        component: ExamComponent,
      },
      {
        path: 'exam/add',
        canActivate: [authGuard], // Add authGuard for user access (if needed)
        component: AddExamComponent,
      },
      {
        path: 'exam/list',
        // canActivate: [authGuard], // Add authGuard for user access (if needed)
        component: ListexamComponent,
      },
      // {
      //   path: 'exam/detail',
      //   canActivate: [authGuard], // Add authGuard for user access (if needed)
      //   component: ExamDetailComponent,
      // },
    ],
  },
];
