import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrl: './incrementador.component.scss'
})
export class IncrementadorComponent implements OnInit {

  @Input() progress: number = 5;
  @Output() valorSalida: EventEmitter<number> = new EventEmitter<number>();
  progresoControl!: FormControl

  constructor() {
  }

  ngOnInit(): void {
    this.progresoControl = new FormControl(this.progress)
    this.progresoControl.valueChanges.pipe(
      tap((value) => {
        this.progress = value
        this.valorSalida.emit(this.progress)
      })
    ).subscribe()
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

}
