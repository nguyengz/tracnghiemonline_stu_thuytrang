import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { UserAcount } from '../../../models/users-acount';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent implements OnInit {
  useracount = new UserAcount();
  protected userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    status: new FormControl(false, [Validators.required]),
    role: new FormControl(2, [Validators.required]),
  });

  constructor(private userService: UserService) {}
  ngOnInit(): void {}
  onSubmit() {
    if (this.useracount) {
      this.userService.addUser(this.useracount).subscribe(
        (response) => {
          alert('Thêm thành công');
          console.log('User added successfully:', response);
          // Reset the form after successful submission
          this.userForm.reset();
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    } else {
      console.log('false');
    }
  }
}
