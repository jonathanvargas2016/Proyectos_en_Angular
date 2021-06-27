import { Component, OnInit } from '@angular/core';
import {MipaginaService} from "../../../../Servicios/mipagina.service";

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
  constructor(private paginaService: MipaginaService) { }

  ngOnInit(): void {
  }
  guardarHabilidad(){
    console.log(this.habilidad)
  }


}
