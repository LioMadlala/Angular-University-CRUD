import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AnswersPageComponent } from './answers-page/answers-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './HomeComponent.component.html',
  styleUrls: ['./HomeComponent.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(QuestionsPageComponent) questionPage:QuestionsPageComponent;
  @ViewChild(AnswersPageComponent) answersPage:AnswersPageComponent;
  progress:number =0;

  constructor() { }

  ngOnInit(): void {
  }

  next()
  {
    this.questionPage.nextQuestion();
    this.onClickNext();
    this.progress = this.questionPage.progres;
  }


  prev()
  {
      this.questionPage.previousQuestion();
      this.answersPage.deleteAnswer(this.questionPage.questionIndex);
      this.progress = this.questionPage.progres;

  }
  answer:any={}
  onClickNext(){
    this.answer=this.questionPage.answer;

   this.answersPage.appendAnswer(this.answer);

  }

}
