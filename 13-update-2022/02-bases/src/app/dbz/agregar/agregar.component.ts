import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPersonaje } from 'src/app/interfaces/ipersonaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  nuevo: IPersonaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
