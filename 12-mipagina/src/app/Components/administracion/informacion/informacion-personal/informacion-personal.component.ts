import {Component, OnInit} from '@angular/core';
import {InfoPersonalService} from "../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'

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
  ) {}

  ngOnInit(): void {
  }

  guardarInfoUsuario(forma: any){

    Swal.fire({
      title: 'Desea guardar los datos?',
      text:'Tus datos se guardarán y podrás modificarlos mas tarde',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar datos'
    }).then((result) => {
      if (result.isConfirmed) {
        this.verificarErrores();
        if (this.imagenCapturada && this.pdfCapturado) {
          this.infoPerService.cargarFormInfoPerson(this.informacionPersonal,
            this.imagenCapturada,
            this.pdfCapturado);
        }
      }
    })
  }

  capturarFotoPerfil(eventFP: any): any{
     this.imagenCapturada = eventFP.target.files[0]
  }
  capturarCV(event: any):any{

    this.pdfCapturado = event.target.files[0]
  }

  verificarErrores(){
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
  }

}

