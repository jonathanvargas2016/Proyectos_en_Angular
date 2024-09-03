import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrl: './incrementador.component.scss'
})
export class IncrementadorComponent implements OnInit {

  @Input() progress: number = 5;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter<number>();
  progresoControl!: FormControl

  constructor() {
  }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
    this.progresoControl = new FormControl(this.progress, [Validators.min(0), Validators.max(100)])
  }

  cambiarValor(valor: number) {

    this.progress += valor


    if (this.progress >= 100 && this.progress > 0) {
      this.progress = 100
    }

    if (this.progress <= 0 && this.progress < 0) {
      this.progress = 0
    }
    this.valorSalida.emit(this.progress)
    this.progresoControl.setValue(this.progress)
  }

  onChange(newValor: number) {

    if (newValor >= 100) {
      this.progress = 100
    } else if (newValor <= 0) {
      this.progress = 0
    }else {
      this.progress = newValor
    }
    this.valorSalida.emit(this.progress)
  }

}
