import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';
import { UserComponent } from './home/user/user.component';

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
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'users',
  //   component: UserComponent,
  // },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'users',
        canActivateChild: [authGuard],
        component: UserComponent,
      },
    ],
    // children: [
    //   {
    //     path: '',
    //     canActivateChild: [authGuard],
    //     children: [
    //       { path: 'users', component: UserComponent },
    //       // { path: 'question-bank', component: QuestionBankComponent },
    //       // {
    //       //   path: 'question-bank/question/:questionId',
    //       //   component: QuestionDetailComponent,
    //       // },
    //       // { path: 'courses', component: ManageCourseComponent },
    //       // { path: 'tests', component: ManageTestComponent },
    //       // { path: 'tests/:id/preview', component: DetailTestComponent },
    //       // { path: 'tests/:id/users', component: UserTestComponent },
    //       // {
    //       //   path: 'tests/:id/users/:username',
    //       //   component: UserTestResultComponent,
    //       // },
    //       // { path: 'tests/add-test', component: AddTestComponent },
    //       // {
    //       //   path: 'courses/:courseId/parts/:partId/view-question',
    //       //   component: ListQuestionComponent,
    //       // },
    //       // { path: 'courses/:courseId/parts', component: ManagePartComponent },
    //     ],
    //   },
    // ],
  },
];
