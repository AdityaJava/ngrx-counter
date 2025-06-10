import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  standalone: false,
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent implements OnInit{
  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  @Output()
  incrementEvent : EventEmitter<void> = new EventEmitter();

  @Output()
  decrementEvent : EventEmitter<void> = new EventEmitter();
  
  @Output()
  resetEvent : EventEmitter<void> = new EventEmitter();

  onIncrement() {
    this.incrementEvent.emit();
  }

  onDecrement() {
    this.decrementEvent.emit();
  }

  onReset() {
    this.resetEvent.emit();
  }

}
