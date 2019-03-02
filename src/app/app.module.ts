import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './components/component1.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { ContactUsComponent } from './components/contact-us.component';
import { FeedbackComponent } from './components/feedback.component';
import { NavComponent } from './components/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './components/add-task.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ListFeedbacksComponent } from './components/list-feedbacks.component';
import { FeedbackService } from './feedback.services';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    FeedbackComponent,
    NavComponent,
    AddTaskComponent,
    ListFeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})

export class AppModule { }
