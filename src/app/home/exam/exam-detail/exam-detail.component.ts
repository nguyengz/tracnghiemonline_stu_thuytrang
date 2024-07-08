import { Component, Input, OnInit } from '@angular/core';
import { ExamService } from '../../../services/exam.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamDetail } from '../../../models/exam-detail';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from '../../../models/subject';
import { QuestionOfExam } from '../../../models/question-of-exam';
import { Option } from '../../../models/option';

@Component({
  selector: 'app-exam-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './exam-detail.component.html',
  styleUrl: './exam-detail.component.css',
})
export class ExamDetailComponent implements OnInit {
  @Input() examID = 0;
  @Input() examName = '';

  examDetail = new ExamDetail('');
  // examDetail: ExamDetail[] = [];
  subjectID!: number;
  subjectName!: string;
  // examID!: number;
  // examName!: string;
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

  saveQuestion() {
    if (this.question.options.length < 2) {
      alert('You must have at least 2 answers.');
      return;
    }
    this.question.subjectId = this.subjectID;
    // console.log(this.question);
    this.questionService.createQuestion(this.question).subscribe(
      (response) => {
        console.log('Question created:', response);
        alert('Thêm thành công');
        // this.getQuestions();
        this.resetQuestionForm();
      },
      (error) => {
        console.error('Error creating question:', error);
      }
    );
  }

  addOption() {
    if (this.question.options.length < 4) {
      this.question.options.push({
        content: '',
        status: false,
      });
    } else {
      alert('You can only add up to 4 answers.');
    }
  }
  resetQuestionForm() {
    this.question = new Question();
  }
  changeStatus(index: number, status: boolean) {
    this.question.options.forEach((option, i) => {
      option.status = i === index ? !status : false;
    });
  }
}
