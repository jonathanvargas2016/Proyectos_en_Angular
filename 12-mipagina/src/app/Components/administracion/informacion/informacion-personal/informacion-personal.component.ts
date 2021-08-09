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
  existeErrorImg = false;
  existeErrorPdf = false;
  constructor(
    public infoPerService: InfoPersonalService
  ) {
  }

  ngOnInit(): void {
  }

  async guardarInfoUsuario(forma: any){

    if(this.imagenCapturada == undefined){
      this.existeErrorImg = true;
    }else{
      this.existeErrorImg = false
    }

    if(this.pdfCapturado == undefined){
      this.existeErrorPdf = true;
    }else{
      this.existeErrorPdf = false
    }

    if (this.imagenCapturada && this.pdfCapturado) {
      try {
        await this.infoPerService.cargarFormInfoPerson(this.informacionPersonal,
          this.imagenCapturada,
          this.pdfCapturado);
      } catch (error) {
        throw error;
      }
    }
  }

  capturarFotoPerfil(eventFP: any): any{
     this.imagenCapturada = eventFP.target.files[0]
  }
  capturarCV(event: any):any{

    this.pdfCapturado = event.target.files[0]
  }

}
