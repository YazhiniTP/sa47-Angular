import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feedback } from './model';
import { FeedbackService } from '../feedback.services';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {  
  //@Output()
  //onNewFeedback = new EventEmitter<Feedback>();

  constructor(private feedbackSvc: FeedbackService) { }

  ngOnInit() {
  }

  processForm(feedbackForm: NgForm) {
    const feed: Feedback = <Feedback> feedbackForm.value;
    /*console.info('name : %s', feedbackForm.value.name);
    console.info('phone : %s', feedbackForm.value.phone);
    console.info('email : %s', feedbackForm.value.email);
    console.info('comment : %s', feedbackForm.value.comment);*/

    console.info('feedback: ', feed); //display before submit cutton clicked
    console.info('Processing form... ', feedbackForm); //after submitting
    //this.onNewFeedback.next(feed);
    
    //this.feedbackSvc.addFeedback(feed);

    /*let p = this.feedbackSvc.addFeedbackWithPromise(feed);
    p = p.then(() => {})
    p = p.catch(() => {})
    */

    this.feedbackSvc.addFeedbackWithPromise(feed)
      .then((result) => {
        console.log('inserted ', result);   
        feedbackForm.resetForm();     
      })
      .catch(error => {
        console.error('Insert error: ', error);
      })    
  }

}
