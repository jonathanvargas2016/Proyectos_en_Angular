import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  termino = new FormControl('')
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    if(this.termino.value?.trim().length === 0) return
    this.onEnter.emit(this.termino.value!);
    this.termino.reset();
  }

}
