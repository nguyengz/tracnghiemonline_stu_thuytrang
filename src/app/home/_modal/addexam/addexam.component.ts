import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Exam } from '../../../models/exam';
import { CommonModule } from '@angular/common';
import { ExamService } from '../../../services/exam.service';
import { Subject } from '../../../models/subject';

@Component({
  selector: 'app-addexam',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './addexam.component.html',
  styleUrl: './addexam.component.css',
})
export class AddexamComponent implements OnInit {
  exam = new Exam();
  // subject = new Subject();
  subjectID!: number;
  constructor(
    private examService: ExamService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.subjectID = params['subjectID'];
      // this.subjectName = params['subjectName'];
      // this.getExamBySubjects(subjectID);
      // console.log(subjectID);
    });
  }

  onSubmit() {
    if (this.exam) {
      // this.subject.id = this.subjectID;
      this.exam.subject.id = this.subjectID;
      this.examService.addExam(this.exam).subscribe(
        (response) => {
          alert('Thêm thành công');
          console.log('Exam added successfully:', response);
          // Reset the form after successful submission
          //  this.userForm.reset();
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    } else {
      console.log('false');
    }

    console.log(this.exam);
    // this.exam;
  }
}
