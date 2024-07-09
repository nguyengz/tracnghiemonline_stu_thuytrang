import { Component, Input, OnInit } from '@angular/core';
import { ExamDetail } from '../../../models/exam-detail';
import { Question } from '../../../models/question';
import { QuestionOfExam } from '../../../models/question-of-exam';
import { Subject } from '../../../models/subject';
import { ExamService } from '../../../services/exam.service';
import { QuestionService } from '../../../services/question.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview-exam',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  templateUrl: './preview-exam.component.html',
  styleUrl: './preview-exam.component.css',
})
export class PreviewExamComponent implements OnInit {
  @Input() examID = 0;
  @Input() examName = '';

  examDetail = new ExamDetail('');
  // examDetail: ExamDetail[] = [];
  subjectID!: number;
  subjectName!: string;
  selectedAnswer!: number;
  // examID!: number;
  // examName!: string;
  isSelected: boolean = false;
  question = new Question();
  questionOfExam: QuestionOfExam[] = [];
  // questions: Option[] = [];
  subjects: Subject[] = [];

  constructor(
    private examService: ExamService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   this.subjectID = params['subjectID'];
    //   // this.examID = params['examID'];
    //   // this.examName = params['examName'];
    // });
    this.route.queryParams.subscribe((params) => {
      this.subjectID = params['subjectID'];
      this.subjectName = params['subjectName'];
      // this.getExamBySubjects(subjectID);
      // console.log(subjectID);
    });
    this.getExamDetail(this.examID);

    console.log('IDexam' + this.examID);
    // console.log('subjectName:' + this.subjectName);
  }
  getExamDetail(examID: number) {
    this.examService.getExamDetail(examID).subscribe(
      (data) => {
        this.examDetail = data;
        this.questionOfExam = data.questions;
        console.log('examDetail:', this.questionOfExam);
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }
  selectAnswer(value: number) {
    this.isSelected = true;
    this.selectedAnswer = value;
  }
}
