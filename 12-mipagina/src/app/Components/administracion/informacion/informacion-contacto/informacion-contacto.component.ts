import { Component, OnInit } from '@angular/core';
import {InfoContactoService} from "../../../../Servicios/infoContacto.service";
import Swal from "sweetalert2";

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
        this.infoContService.cargarInformacionContacto(this.informacionContacto)
      }
    })
  }

}
