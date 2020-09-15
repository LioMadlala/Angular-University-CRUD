import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  button_text ="save";
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
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.qustion = this.qustions[this.quetionIndex];
    console.log(this.qustion['Question']);
  }

  saveAnswer(key:any)
  {

    console.log(key)
   console.table({index:this.quetionIndex,Question:this.qustions.length})
      //go to next page
      if(this.button_text == 'next page')
      {
          this.router.navigate(['/home'])
      }
      //switch questions
      if(this.quetionIndex+1 != this.qustions.length)

      {
        this.infor.push({key:key,answer:this.inputValue})
        this.quetionIndex ++;
        this.qustion = this.qustions[this.quetionIndex];
      }
      else{
        this.button_text = 'next page'
      }

    this.inputValue ='';


  }

  deleteInfor(index)
  {
    console.log(index)
    this.infor.splice(index,1);
  }
}
