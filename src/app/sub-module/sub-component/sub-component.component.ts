import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.scss']
})
export class SubComponentComponent implements OnInit, OnDestroy {

  time: Date = new Date();
  interval: any;

  constructor() { }

  ngOnInit(): void {

    this.interval = setInterval(() => {
      this.time = new Date();
    }, 2000);

  }

  ngOnDestroy(): void {
    this.interval = ""; 
  }

}
