import {Component, OnInit} from '@angular/core';
import {MipaginaService} from "../../Servicios/mipagina.service";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  constructor(private paginaService: MipaginaService) {
  }

  informacionPersonal: any = {
    uid: '',
    nombres: '',
    titulo: '',
    linkCV: '',
    perfilProfesional: '',
    motivacion: '',
  }

  informacionContacto: any = {
    correoPersonal: '',
    correoInstEmpres: '',
    telefono: '',
    linkUbicacion: '',
    github: '',
    linkedin: ''
  }

  habilidad: any = {
    tipo: '',
    nombreHabilidad: ''
  }
  educacion: any = {
    titulo: '',
    ubicacion: '',
    fechaInicio: '',
    fechaFin: '',
    img: '',
    link: ''
  }

  ngOnInit(): void {

  }

  async guardarInfoUsuario(){
    try{
      await this.paginaService.agregar(this.informacionPersonal);
    }catch (error){
      throw error;
    }
  }

  guardarInfoContacto(){
    console.log(this.informacionContacto)

  }
  guardarHabilidad(){
    console.log(this.habilidad)
  }
  guardarEducacion(){
    console.log(this.educacion)
  }

}
