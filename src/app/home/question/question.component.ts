import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { IQuestion } from '../../interfaces/iquestion';
import { CommonModule } from '@angular/common';
import { Subject } from '../../models/subject';
import { Question } from '../../models/question';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questions: IQuestion[] = [];
  allQuestions: IQuestion[] = [];
  question = new Question();
  subjects: Subject[] = [];
  selectedSubjectId!: number;
  options: { content: string; status: boolean }[] = [];
  
  ngOnInit(): void {
    this.getSubjects();
    this.getQuestions();
  }

  constructor(private questionService: QuestionService) {}

  getQuestions() {
    this.questionService.getQuestions().subscribe(
      (response) => {
        this.allQuestions = response.content; // Store the original list of questions
        this.filterQuestions();
      },
      (error) => {
        console.error('Error fetching question:', error);
      }
    );
  }

  getSubjects(): void {
    this.questionService.getSubjects().subscribe(
      (subjects) => {
        this.subjects = subjects;
        console.log('Subjects:', this.subjects);
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
    
    this.questionService.createQuestion(this.question).subscribe(
      (response) => {
        console.log('Question created:', response);
        alert('Thêm thành công');
        this.getQuestions();
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
        status: false
      });
    } else {
      alert('You can only add up to 4 answers.');
    }
  }

  changeStatus(index: number, status: boolean) {
    this.question.options.forEach((option, i) => {
      option.status = (i === index) ? !status : false;
    });
  }

  resetQuestionForm() {
    this.question = new Question();
  }
  getSubjectNameByIdInSubject(subjectId: number): string {
    const subject = this.subjects.find((s) => s.id === subjectId);
    return subject ? subject.subjectName : '';
  }
  filterQuestions(): void {
    this.questions = this.selectedSubjectId
      ? this.allQuestions.filter((q) => q.subjectId == this.selectedSubjectId)
      : this.allQuestions;
    console.log('Filtered questions:', this.questions);
    console.log('Filtered questions:', this.selectedSubjectId);
  }
}
