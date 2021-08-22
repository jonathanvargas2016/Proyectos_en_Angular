import { Component, OnInit } from '@angular/core';
import {CertificacionService} from "../../../../Servicios/certificacion.service";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: 'Desea guardar los datos?',
      text: 'Tus datos se guardarán y podrás modificarlos mas tarde',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar datos'
    }).then((result) => {
      if (result.isConfirmed) {
        this.verificarErrores();
        if (this.certCapturado && !this.errorCertCapturado && !this.errorCertCapturado) {
          this.certService.cargarFormCertificacion(this.certificaciones, this.certCapturado);
        }
      }
    })
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
