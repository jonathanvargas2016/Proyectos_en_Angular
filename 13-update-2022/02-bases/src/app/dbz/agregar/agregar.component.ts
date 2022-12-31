import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPersonaje } from 'src/app/interfaces/ipersonaje';
import { DbzService } from '../services/dbz.service';

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

  constructor(private readonly dbzService: DbzService) {}

  ngOnInit(): void {}

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
