import { Component } from '@angular/core';
import { Feedback } from './components/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular7';
 
  days: string[]=['Day1','Day2','Day3','Day4'];

  feedbacks: Feedback[] = [];
  addNewFeedback(feed: Feedback) {
    this.feedbacks.push(feed);
    console.log('feedback: ',this.feedbacks); 
  }
}
