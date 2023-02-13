import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  termino = new FormControl('');
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // se emitira cuando el user deje de escribir...

  debouncer: Subject<string> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300)) // cuantas ms debo esperar para emitir el sig valor...
      .subscribe((valor) => {
        this.onDebounce.emit(valor);
      });
  }

  buscar(): void {
    if (this.termino.value?.trim().length === 0) return;
    this.onEnter.emit(this.termino.value!);
    this.termino.reset();
  }

  teclaPresionada() {
    // if (this.termino.value?.trim().length === 0) return;
    this.debouncer.next(this.termino.value!); // emitir el sig valor...
  }
}
