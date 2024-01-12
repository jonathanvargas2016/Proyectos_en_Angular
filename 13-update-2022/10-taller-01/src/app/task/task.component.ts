import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: any;
  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeEmitter: EventEmitter<any> = new EventEmitter<any>()

  constructor(){
  }

  onChange(event: any): void {
    this.emitter.emit(event.target.checked)
  }

  onRemove() {
    this.removeEmitter.emit()
  }
}
