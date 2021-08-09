import { Component, OnInit } from '@angular/core';
import {InfoContactoService} from "../../../../Servicios/infoContacto.service";

@Component({
  selector: 'app-informacion-contacto-form',
  templateUrl: './informacion-contacto.component.html',
  styleUrls: ['./informacion-contacto.component.css']
})
export class InformacionContactoComponent implements OnInit {

  informacionContacto: any = {
    correoPersonal: '',
    correoInstEmpres: '',
    whatssap: '',
    ubicacion: '',
    github: '',
    linkedin: '',
  }
  constructor(public readonly infoContService: InfoContactoService) { }

  ngOnInit(): void {
  }
  guardarInfoContacto(){
    return this.infoContService.cargarInformacionContacto(this.informacionContacto)
  }

}
