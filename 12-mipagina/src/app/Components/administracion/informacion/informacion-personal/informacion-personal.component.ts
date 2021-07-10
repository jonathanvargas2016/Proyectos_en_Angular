import {Component, OnInit} from '@angular/core';
import {InfoPersonalService} from "../../../../Servicios/infoPersonal.service";

@Component({
  selector: 'app-informacion-personal-form',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {
  informacionPersonal: any = {
    nombres: '',
    titulo: '',
    perfilProfesional: '',
    motivacion: '',
    imagen: '',
    pdfCV: ''
  }
  imagenCapturada: any
  pdfCapturado: any

  constructor(
    public paginaService: InfoPersonalService
  ) {
  }

  ngOnInit(): void {
  }

  async guardarInfoUsuario(){
    try{
      await this.paginaService.cargarFormularioCompleto(this.informacionPersonal,
        this.imagenCapturada,
        this.pdfCapturado);
    }catch (error){
      throw error;
    }

  }
  capturarFotoPerfil(event: any): any{
     this. imagenCapturada = event.target.files[0]
  }
  capturarCV(event: any):any{
    this. pdfCapturado = event.target.files[0]
  }

}
