import { Component, OnInit } from '@angular/core';
import {InfoPersonalService} from "../../../../Servicios/infoPersonal.service";

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
  constructor(private paginaService: InfoPersonalService) { }

  ngOnInit(): void {
  }
  guardarHabilidad(){
    console.log(this.habilidad)
  }


}
