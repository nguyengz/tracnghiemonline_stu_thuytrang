import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExamService } from '../../../services/exam.service';
import { Exam } from '../../../models/exam';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamDetailComponent } from '../exam-detail/exam-detail.component';
import { AddexamComponent } from '../../_modal/addexam/addexam.component';
import { Subject } from '../../../models/subject';

@Component({
  selector: 'app-listexam',
  standalone: true,
  templateUrl: './listexam.component.html',
  styleUrl: './listexam.component.css',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExamDetailComponent,

    AddexamComponent,
  ],
})
export class ListexamComponent implements OnInit {
  examBySubjects: Exam[] = [];
  // subjectID!: number;
  subjectName!: string;
  selectedExamID!: number;
  selectedexamName!: string;
  showExamDetail = false;
  showListExam = true;
  isAddExamModalOpen = false;

  // @Output() dataChanged = new EventEmitter<any>();
  constructor(
    private examService: ExamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const subjectID = params['subjectID'];
      this.subjectName = params['subjectName'];
      this.getExamBySubjects(subjectID);
      console.log(subjectID);
    });
  }
  // sendData() {
  //   this.dataChanged.emit({ subjectName: this.subjectName });
  // }
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
  openExamDetail(examID: number, examName: string) {
    // this.router.navigate(['admin', 'exam', 'detail'], {
    //   queryParams: { subjectID: subjectID, examID: examID, examName: examName },
    // });
    // console.log(examID, examName);
    this.showExamDetail = true;
    this.showListExam = false;
    this.selectedExamID = examID;
    this.selectedexamName = examName;
  }
  openAddExamModal(): void {
    this.isAddExamModalOpen = true;
    console.log('modal' + this.isAddExamModalOpen);
  }

  closeAddExamModal(): void {
    this.isAddExamModalOpen = false;
  }
}
