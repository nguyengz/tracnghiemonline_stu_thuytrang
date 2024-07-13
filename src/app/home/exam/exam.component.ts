import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from '../../models/subject';
import { AddExamComponent } from './add-exam/add-exam.component';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  subjects: Subject[] = [];
  subject = new Subject();
  examBySubjects: Exam[] = [];
  isopenQuestions = false;
  isAddSubjectModalOpen = false;
  constructor(
    private subjectService: SubjectService,
    private examService: ExamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSubjects();
  }
  getSubjects(): void {
    this.subjectService.getSubject().subscribe(
      (subjects) => {
        this.subjects = subjects;
        console.log('Subjects:', this.subjects);
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }
  getExamBySubjects(subjectID: number): void {
    this.examService.getExamBySubject(subjectID).subscribe(
      (exams) => {
        this.examBySubjects = exams;
        console.log('Subjects:', this.examBySubjects);
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }
  onAddSubject() {
    if (this.subject) {
      this.subjectService.addSubject(this.subject).subscribe(
        (response) => {
          alert('Thêm thành công');
          console.log('Subject added successfully:', response);
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
  }
  openQuestions(subjectID: number, subjectName: string) {
    // this.isopenQuestions = true;
    // console.log("Chao "+ this.isopenQuestions)
    // this.router.navigate(['admin', 'exam', 'list', subjectID]);
    // this.getExamBySubjects(subjectID);
    this.router.navigate(['admin', 'exam', 'listtest'], {
      queryParams: { subjectID: subjectID, subjectName: subjectName },
    });
  }
  openListExam() {
    this.router.navigate(['admin', 'exam']);
  }
  openAddExamModal() {
    this.isAddSubjectModalOpen = true;
  }
  closeAddExamModal() {
    this.isAddSubjectModalOpen = false;
  }
}
