import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {

  @Input()
  count :  number = 0;
  
  constructor() { }

  ngOnInit(): void {

  }

}
