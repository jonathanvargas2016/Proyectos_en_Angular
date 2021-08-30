import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InfoPersonalService} from "../../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-card-info-per',
  templateUrl: './card-info-per.component.html',
  styleUrls: ['./card-info-per.component.css']
})
export class CardInfoPerComponent implements OnInit {

  documentos: any = [];
  constructor(
    private readonly router: Router,
    public readonly infoPerService: InfoPersonalService
  ) { }

  ngOnInit(): void {
    this.infoPerService.getInfoPersonal().subscribe(resp =>{
      this.documentos = resp
    })
  }
  dirigirAgregar(){
    this.router.navigate(['administracion','informacion-personal','agregar'])
  }
  eliminar(id: string){
    Swal.fire({
      title: 'Desea eliminar?',
      text:'Tus datos eliminados no se podrán recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.infoPerService.eliminarInfoPersonal(id).then(()=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Eliminado',
            showConfirmButton: false,
            timer: 1500
          })
        }).catch((error)=>{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.message,
            showConfirmButton: true,
          })
        });
      }
    })






  }
}
