import { Component, OnInit } from '@angular/core';
import { Question } from '../home/questions-page/Questions/qustions.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  inputValue:any;
  //{key:'',vlaue:''}
  infor:any[]=[]
  quetionIndex = 0;
  qustions:any[]=[
    {
      key:'Age',Question:'How old are you?'
    },
    {
      key:'nationality',Question:'what is your nationality?'
    },
    {
      key:'province',Question:'what province are you from?'
    },
    {
      key:'angular experience',Question:'How many years of experience you have using angular?'
    },
    {
      key:'proficient language',Question:'what programming language are confortible with?'
    },
    {
      key:'Rate',Question:'0-5 rate yourself?'
    },
    {
      key:'prefered salary',Question:'How much would you like to earn?'
    },
    {
      key:'learning',Question:'would you like to learn anything?'
    }
  ];
  qustion ={};
  constructor() { }

  ngOnInit(): void {

    this.qustion = this.qustions[this.quetionIndex];
    console.log(this.qustion['Question']);
  }

  saveAnswer(key:any)
  {

    //set the quetion to start with 1
    if(this.quetionIndex =0)
     { this.quetionIndex=1}

     
    if(this.infor.length != this.qustions.length){

      this.infor.push({key:key,answer:this.inputValue})

      this.qustion = this.qustions[this.quetionIndex];
    }
    this.quetionIndex ++;
    this.inputValue ='';

  }
}
