import { Component, OnInit } from '@angular/core';
import {MipaginaService} from "../../../../Servicios/mipagina.service";

@Component({
  selector: 'app-informacion-contacto-form',
  templateUrl: './informacion-contacto.component.html',
  styleUrls: ['./informacion-contacto.component.css']
})
export class InformacionContactoComponent implements OnInit {

  informacionContacto: any = {
    correoPersonal: '',
    correoInstEmpres: '',
    telefono: '',
    linkUbicacion: '',
    github: '',
    linkedin: ''
  }
  constructor(private paginaService: MipaginaService) { }

  ngOnInit(): void {
  }
  guardarInfoContacto(){
    console.log(this.informacionContacto)
  }

}
