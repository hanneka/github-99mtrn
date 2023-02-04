import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    //style binding
  appliedCSSClass = 'green';
  notAppliedCSSClass = true;
  myColor = 'red';

  //Two-way data binding
  myName = '';

  //Event binding
  message = '';

  onButtonClick() {
    this.message = 'Button was clicked!';
  }
}