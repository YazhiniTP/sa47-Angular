import { Component, OnInit, Input } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  message = "";
  button = "Buy me!";
  pics: string[]=['9780060555665.jpg',
  '9780062377210.jpg',
  '9780062390851.jpg',
  '9780062498533.jpg'];

buttonclicked($event){
  console.info("buttonclicked", $event);
  this.message = "Hi";
}
 
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

}
