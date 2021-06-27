import { Component, OnInit } from '@angular/core';
import {MipaginaService} from "../../../../Servicios/mipagina.service";

@Component({
  selector: 'app-informacion-personal-form',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {
  informacionPersonal: any = {
    uid: '',
    nombres: '',
    titulo: '',
    linkCV: '',
    perfilProfesional: '',
    motivacion: '',
  }
  constructor(private paginaService: MipaginaService) { }

  ngOnInit(): void {
  }

  async guardarInfoUsuario(){
    try{
      await this.paginaService.agregar(this.informacionPersonal);
    }catch (error){
      throw error;
    }
  }

}
