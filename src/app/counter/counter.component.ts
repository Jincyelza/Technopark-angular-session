import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count=0;

  counterinc(){
    return this.count++;
  }
  counterdec(){
    return this.count--;
  }

  constructor() { }

  ngOnInit() {
  }

}
