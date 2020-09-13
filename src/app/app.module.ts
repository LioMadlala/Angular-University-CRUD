
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';

import { QuestionsPageComponent } from './home/questions-page/questions-page.component';
import { AnswersPageComponent } from './home/answers-page/answers-page.component';
import { HomeComponent } from './home/HomeComponent.component';
import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    HomeComponent,
    QuestionsPageComponent,
    AnswersPageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ProgressBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
