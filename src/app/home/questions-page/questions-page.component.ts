import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { test } from './Questions/Test.model';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {

  myTest:any[] =test;
  constructor() { }
  questionIndex:number = 0;
  public answer:any ={};
  public currentIndex=0;

  public progres:number=0;
  ngOnInit(): void {

  }

  nextQuestion():void
  {
    if(this.questionIndex < this.myTest.length)
  {
    this.questionIndex ++;

  }else
  if(this.questionIndex>=this.myTest.length)
  {

    this.progres =100;
    this.questionIndex =this.myTest.length-1;
  }
  this.updateProgress(1);
  }

  previousQuestion():void
  {
    if(this.questionIndex > 0)
    {
      this.questionIndex --;

    }else{
      this.questionIndex = 0;
    }
    this.updateProgress(-1);
  }

  onItemChange(yourAnswer,questionNumber)
  {
    this.answer = {number:questionNumber,answer:yourAnswer};

  }

  updateProgress(direction:number){
      this.progres += direction*(100/this.myTest.length);
  }

}
