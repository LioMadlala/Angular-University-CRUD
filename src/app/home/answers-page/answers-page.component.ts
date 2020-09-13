import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers-page',
  templateUrl: './answers-page.component.html',
  styleUrls: ['./answers-page.component.scss']
})
export class AnswersPageComponent implements OnInit {

  userAnswers:any[] =[];
  constructor() { }

  ngOnInit(): void {
  }

  appendAnswer(answer:any){
    this.userAnswers.push(answer);
  }

  deleteAnswer(index:number)
  {
    this.userAnswers.splice(index,1);
  }
}
