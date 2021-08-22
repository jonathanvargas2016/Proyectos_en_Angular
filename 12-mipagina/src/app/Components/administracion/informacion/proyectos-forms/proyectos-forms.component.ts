import { Component, OnInit } from '@angular/core';
import {ProyectoService} from "../../../../Servicios/proyecto.service";

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
  async guardarProyecto(){
    this.verificarErrores()
    if(this.proyImgCapturado){
      try {
        await this.proyeService.cargarFormProyecto(this.proyecto, this.proyImgCapturado)
      }catch (e){
        throw e;
      }
    }
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
