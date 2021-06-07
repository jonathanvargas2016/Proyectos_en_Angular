import { Component, OnInit } from '@angular/core';
import {MipaginaService} from "../../Servicios/mipagina.service";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  constructor(private paginaService: MipaginaService) {
  }

  informacionPersonal = {
    nombres: '',
    titulo: '',
    linkCV: '',
    perfilProfesional: '',
    motivacion: '',
    uid: '',
  }
  ngOnInit(): void {
  }
  async guardarInfoPersonal(){
    try{
      await this.paginaService.agregar(this.informacionPersonal);
    }catch (error){
      console.log('error en admi' + error);
    }
  }

}
