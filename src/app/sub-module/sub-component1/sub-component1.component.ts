import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-component1',
  templateUrl: './sub-component1.component.html',
  styleUrls: ['./sub-component1.component.scss']
})
export class SubComponent1Component implements OnInit, OnChanges, OnDestroy {

  @Input() time: Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnDestroy(): void {
    
  }

}
