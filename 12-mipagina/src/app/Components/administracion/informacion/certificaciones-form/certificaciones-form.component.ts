import { Component, OnInit } from '@angular/core';
import {CertificacionService} from "../../../../Servicios/certificacion.service";

@Component({
  selector: 'app-certificaciones-form',
  templateUrl: './certificaciones-form.component.html',
  styleUrls: ['./certificaciones-form.component.css']
})
export class CertificacionesFormComponent implements OnInit {
  certCapturado: any
  certificaciones = {
    titulo: '',
    img: '',
    fecha: ''
  }

  constructor(public readonly certService: CertificacionService) { }

  ngOnInit(): void {
  }
  guardarCertificaciones(){
    try {
      this.certService.cargarFormCertificacion(this.certificaciones, this.certCapturado);
    }catch (e){
      throw e;
    }
  }

  capturarCertImg(event: any){
    this.certCapturado = event.target.files[0]
  }

}
