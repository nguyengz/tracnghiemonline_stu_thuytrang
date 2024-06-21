import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users';
import { CommonModule, NgForOf } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CommonModule, ReactiveFormsModule, AddUserComponent],
})
export class UserComponent implements OnInit {
  UserList: User[] = [];
  showAddUserForm: boolean = false;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.fetchUser();
  }
  fetchUser() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.UserList = data;
        console.log(this.UserList);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  onSubmit() {}
  toggleAddUserForm() {
    this.showAddUserForm = !this.showAddUserForm;
  }
}
