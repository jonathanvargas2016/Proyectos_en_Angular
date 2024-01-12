import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list: any = [];
  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();
  constructor(){}

  emitValue(event: boolean, index: number){
    console.log(event, index);
    this.emitter.emit({
      checked: event,
      position: index
    })
  }
}
