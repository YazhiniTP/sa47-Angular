import { Injectable, EventEmitter } from '@angular/core';
import Dexie from 'dexie';
import { Feedback } from './components/model';

@Injectable()
export class FeedbackService {
     
    private feedbacks: Feedback[] = [];

    onNewFeedback = new EventEmitter<Feedback>();

    contactDB: Dexie;

    constructor() {
        this.contactDB = new Dexie('contact');
        this.contactDB.version(1).stores({
            feedback: 'name,phone,email,comment',
        })
    }

    addFeedbackWithPromise(feed: Feedback): Promise<any> {
        return (
            this.contactDB.table('feedback').put(feed)
                .then((result) => {
                    this.onNewFeedback.next(feed);
                    return (result);
                }) 
        );
    }

    getAddressWithPromise(): Promise<Feedback[]> {
        return  (this.contactDB.table('feedback').toArray())
    }

    getFeedbacks(): Feedback[] {
        //you may want to clone the feedback and not
        //return the actual object
        return (this.feedbacks);
    }

    addFeedback(feed: Feedback) {
        console.log('Feedback ', feed); //listing data after submitting
        this.feedbacks.push(feed);
        this.onNewFeedback.next(feed);
    }
}