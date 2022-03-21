import { Component, OnInit } from '@angular/core';
import {ProyectoService} from "../../../../Servicios/proyecto.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-proyectos-forms',
  templateUrl: './proyectos-forms.component.html',
  styleUrls: ['./proyectos-forms.component.css']
})
export class ProyectosFormsComponent implements OnInit {
  proyImgCapturado: any;
  errorImgProy = false;
  proyecto = {
    uid: '',
    nombre: '',
    descripcion: '',
    img: '',
    tipo: ''
  }
  tiposProyecto = ['Frontend', 'Backend', 'Móvil', 'Otro']
  constructor(public  readonly proyeService: ProyectoService) { }

  ngOnInit(): void {
  }

  guardarProyecto(){

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
        this.verificarErrores()
        if(this.proyImgCapturado){
          this.proyeService.cargarFormProyecto(this.proyecto, this.proyImgCapturado)
        }
      }
    })
  }

  capturarProyImg(event: any){
    this.proyImgCapturado = event.target.files[0];
  }

  verificarErrores(){
    if(this.proyImgCapturado === undefined){
      this.errorImgProy = true;
    }else{
      this.errorImgProy = false;
    }
  }

}
