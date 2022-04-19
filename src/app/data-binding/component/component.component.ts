import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  names: any = [{name: 'Pankaj', age: 27}, {name: 'vikas', age: 17}];
  location: string = 'Pune';

  message: string = "<h1>From component to view</h1>"

  redClass: any = ["red"];

  isred: boolean = false;

  twoWayBinding: string = "This is two way binding.";

  style: string = "color: green; background-color: red;";

  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    this.style = "color: red;"
    console.log(this.style);
  }

}
