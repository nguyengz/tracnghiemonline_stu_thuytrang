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
import { FacultieService } from '../../services/facultie.service';
import { Faculty } from '../../models/faculty';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CommonModule, ReactiveFormsModule, AddUserComponent],
})
export class UserComponent implements OnInit {
  [x: string]: any;
  UserListSV: User[] = [];
  AllUserListSV: User[] = [];
  UserListGV: User[] = [];
  FacultiesList: Faculty[] = [];
  ClassList: Class[] = [];
  showAddUserForm: boolean = false;
  isAddUserModalOpen = false;
  selectedUsersForDeletion: User[] = [];
  filteredClassList: any[] = [];
  // selectedClassID: any;
  selectedClassId!: number;
  roleName!: string;
  isList: boolean = false;

  constructor(
    private userService: UserService,
    private facultyService: FacultieService,
    private classService: ClassService,
    private route: ActivatedRoute
  ) {
    this.selectedUsersForDeletion = [];
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isList = params['list'] === 'sinhvien';
      const RID = JSON.parse(localStorage.getItem('RID') || 'null');

      this.fetchUserByRole(RID.role);
    });
    // this.fetchUser();
    this.fetchFaculty();
    this.fetchClass();
    // this.fetchUserByRole(RID.role);
  }
  fetchFaculty() {
    this.facultyService.getFaculties().subscribe(
      (data) => {
        this.FacultiesList = data;
        console.log(this.FacultiesList);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  fetchClass() {
    this.classService.getClass().subscribe(
      (data) => {
        this.ClassList = data;
        console.log(this.ClassList);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  // fetchUser() {
  //   this.userService.getUsers().subscribe(
  //     (data) => {
  //       this.UserList = data;
  //       console.log(this.UserList);
  //     },
  //     (error) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }
  // fetchUserByRole(roleID: number) {
  //   // console;
  //   this.userService.getUsersRole(roleID).subscribe(
  //     (data) => {
  //       this.UserListSV = data;
  //       console.log(this.UserListSV);
  //     },
  //     (error) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }
  fetchUserByRole(roleID: number) {
    if (this.isList) {
      this.userService.getUsersRole(roleID).subscribe(
        (data) => {
          this.UserListSV = data;
          this.AllUserListSV = data;
          console.log(this.UserListSV);
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
    } else {
      this.userService.getUsersRole(roleID).subscribe(
        (data) => {
          this.UserListSV = data;
          console.log(this.UserListSV);
        },
        (error) => {
          console.error('Error fetching faculties:', error);
        }
      );
    }
  }
  fetchUserByClass(classID: number) {
    this.userService.getUserByClass(classID).subscribe(
      (data) => {
        this.UserListSV = data;
        console.log(this.UserListSV);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  // deleteUsers() {
  //   const selectedUserIds = this.UserList.filter((user) => user.isSelected).map(
  //     (user) => user.id
  //   );
  //   this.userService.deleteUser(UserID).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
  deleteUsers(): void {
    if (this.selectedUsersForDeletion.length === 0) {
      alert('Please select users to delete.');
      return;
    }

    const confirmation = confirm(
      'Are you sure you want to delete the selected users?'
    );
    if (!confirmation) {
      return; // User canceled deletion
    }

    this.selectedUsersForDeletion.forEach((user) => {
      this.userService
        .deleteUser(user.id) // Call service to delete each user
        .subscribe({
          next: (response) => {
            console.log('User deleted successfully:', response);
            this.UserListSV = this.UserListSV.filter((u) => u.id !== user.id); // Update local list
          },
          error: (error) => {
            console.error('Error deleting user:', error);
            alert('An error occurred while deleting users. Please try again.');
          },
        });
    });

    this.selectedUsersForDeletion = []; // Clear selected users after deletion
  }

  isSelected(user: User): boolean {
    return this.selectedUsersForDeletion.some(
      (selectedUser) => selectedUser.id === user.id
    );
  }
  toggleSelection(user: User): void {
    const userIndex = this.selectedUsersForDeletion.findIndex(
      (selectedUser) => selectedUser.id === user.id
    );
    if (userIndex > -1) {
      this.selectedUsersForDeletion.splice(userIndex, 1);
    } else {
      this.selectedUsersForDeletion.push(user);
    }
  }
  onClassChange(event: any) {
    this.selectedClassId = event.target.value;
    const selectedfacultyId = event.target.value;
    if (this.selectedClassId != 0 || selectedfacultyId != 0) {
      this.filterUserList();
    } else {
      this.fetchUserByRole(3);
    }
  }

  filterUserList() {
    if (this.selectedClassId != null) {
      this.UserListSV = this.UserListSV.filter(
        (user) => user.classes.id == this.selectedClassId
      );
    } else {
      // Hiển thị toàn bộ danh sách sinh viên
      // this.fetchUserByRole(3);
      this.UserListSV = this.AllUserListSV;
    }
  }
  onSubmit() {}
  openAddUserModal(): void {
    this.isAddUserModalOpen = true;
  }

  closeAddUserModal(): void {
    this.isAddUserModalOpen = false;
  }
  onFacultySelected(event: any) {
    const selectedFacultyId = event.target.value;
    this.filteredClassList = this.ClassList.filter(
      (item) => item.faculty.id === parseInt(selectedFacultyId)
    );
  }
  // getSinhVien(event: Event) {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectedClassID = parseInt(selectedValue, 10);
  //   this.fetchUserByClass(this.selectedClassID);
  //   console.log('Selected class ID:', this.selectedClassID);
  //   console.log('Selected class ID:', this.UserListSV);
  //   // Tìm lớp được chọn trong danh sách filteredClassList
  //   // this.selectedClass = this.filteredClassList.find(
  //   //   (c) => c['id'] === classId
  //   // );
  // }
}
