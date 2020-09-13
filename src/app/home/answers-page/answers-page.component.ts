import { Component, OnInit } from '@angular/core';
import { Answers } from '../questions-page/Questions/Test.model';

@Component({
  selector: 'app-answers-page',
  templateUrl: './answers-page.component.html',
  styleUrls: ['./answers-page.component.scss']
})
export class AnswersPageComponent implements OnInit {

  userAnswers:any[] =[];
  correctAnswers:any[]=Answers;
  constructor() { }

  ngOnInit(): void {
  }

  appendAnswer(answer:any){

    if(answer.answer){
    this.userAnswers.push(answer);
  }
  }

  deleteAnswer(index:number)
  {
    this.userAnswers.splice(index,1);
  }
}
