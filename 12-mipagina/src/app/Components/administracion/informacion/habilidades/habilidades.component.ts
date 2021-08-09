import { Component, OnInit } from '@angular/core';
import {HabilidadService} from "../../../../Servicios/habilidad.service";

@Component({
  selector: 'app-habilidades-form',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad: any = {
    tipo: '',
    nombreHabilidad: ''
  }
  tiposHabilidad = ['Programación', 'Base de datos', 'Frameworks', 'Sistemas Operativos', 'Idiomas', 'Otros']
  constructor(public readonly habService: HabilidadService) { }

  ngOnInit(): void {
  }
  async guardarHabilidad(){
    try {
      await this.habService.cargarFormularioHabilidad(this.habilidad)
    }catch (e){
      throw  e;
    }
  }


}
