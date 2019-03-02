import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Feedback } from './model';
import { FeedbackService } from '../feedback.services';
import { Subscription } from 'rxjs';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-list-feedbacks',
  templateUrl: './list-feedbacks.component.html',
  styleUrls: ['./list-feedbacks.component.css']
})
export class ListFeedbacksComponent implements OnInit, OnDestroy {

  feedbacks: Feedback[] = [];

  onNewFeedback$: Subscription;

  constructor(private feedbackSvc: FeedbackService) { }

  ngOnInit() {
    this.onNewFeedback$ = this.feedbackSvc.onNewFeedback.subscribe(
      (feed: Feedback) => {
        //this.feedbacks = this.feedbackSvc.getFeedbacks();
        this.loadFeedbacks();  
        }
    )
    this.loadFeedbacks();
  }

  private loadFeedbacks() {
    this.feedbackSvc.getAddressWithPromise()
      .then((result: Feedback[]) => {
        console.log('result: ', result);
          this.feedbacks = result;
      }) //then
      .catch(error => {
        console.error('Error: ', error);
      })    
  }

  ngOnDestroy() {
    this.onNewFeedback$.unsubscribe();
  }

}
