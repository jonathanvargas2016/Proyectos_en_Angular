import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  text: string = '';
  @Output() textEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  onChange(event: Event) {
    this.text = (event.target as HTMLInputElement).value
  }

  onAdd() {

    if (this.text.trim().length === 0) {
      return
    }
    this.textEmitter.emit({ text: this.text, done: false }); 
    this.text = '';
  }

}
