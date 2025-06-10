import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{  
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onIncrement(): void {
    this.count++;
  }

  onDecrement(): void {
    this.count--;
  }
  
  onReset(): void {
    this.count = 0;
  }
}
