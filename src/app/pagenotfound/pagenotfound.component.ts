import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {

  //ngIf Demo
  showElement = false;

  //ngFor

  num = ['Item 1', 'Item 2', 'Item 3'];

  items2 = [
    { name: 'Joseph', city: 'Angeles', school: 'HAU' },
    { name: 'Noie', city: 'Candaba', school: 'Harvard' },
    { name: 'Jed', city: 'Mawaque', school: 'AUP' },
  ];

  //ngSwitch
  selectedOption = 1;
}
