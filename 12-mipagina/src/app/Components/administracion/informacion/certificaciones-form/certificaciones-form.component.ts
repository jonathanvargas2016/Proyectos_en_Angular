import { Component, OnInit } from '@angular/core';
import {CertificacionService} from "../../../../Servicios/certificacion.service";

@Component({
  selector: 'app-certificaciones-form',
  templateUrl: './certificaciones-form.component.html',
  styleUrls: ['./certificaciones-form.component.css']
})
export class CertificacionesFormComponent implements OnInit {
  certCapturado: any
  errorFechaCert = false;
  errorCertCapturado = false
  certificaciones = {
    titulo: '',
    img: '',
    fecha: ''
  }

  constructor(public readonly certService: CertificacionService) { }

  ngOnInit(): void {
  }
  guardarCertificaciones(){

    this.verificarErrores();
    if(this.certCapturado && !this.errorCertCapturado && !this.errorCertCapturado){
      try {
        this.certService.cargarFormCertificacion(this.certificaciones, this.certCapturado);
      }catch (e){
        throw e;
      }
    }
  }

  capturarCertImg(event: any){
    this.certCapturado = event.target.files[0]
  }

  verificarErrores(){
    if(this.certificaciones.fecha === ''){
      this.errorFechaCert = true;
    }else{
      this.errorFechaCert = false;
    }

    if(this.certCapturado === undefined){
      this.errorCertCapturado = true;
    }else{
      this.errorCertCapturado = false;
    }
  }

}
