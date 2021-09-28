import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {InfoPersonalService} from "../../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card-info-per',
  templateUrl: './card-info-per.component.html',
  styleUrls: ['./card-info-per.component.css']
})
export class CardInfoPerComponent implements OnInit, OnDestroy {

  suscripcion: Subscription
  suscripcionGetDocument: Subscription
  documentos: any = [];
  documentInfoPersonal: any = {}
  constructor(
    private readonly router: Router,
    public readonly infoPerService: InfoPersonalService
  ) { }

  ngOnInit(): void {
    this.suscripcion = this.infoPerService.getInfoPersonal().subscribe(resp =>{
      this.documentos = resp
    })
  }

  async eliminar(id: string, pathImg: string, pathPdf: string){
    const resp = await Swal.fire({
      title: 'Desea eliminar?',
      text:'Tus datos eliminados no se podrán recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    })
    if(resp.isConfirmed){
      try {
        await this.infoPerService.eliminarInfoPersonal(id)
        await Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 1500
        })

      }catch (e) {
        await Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: "No se pudo eliminar",
          showConfirmButton: true,
        })
      }
    }
  }

  actualizar(id: string){
    return this.suscripcionGetDocument = this.infoPerService.getdocumentInfoPersonal(id)
      .subscribe(data=>{
        return this.documentInfoPersonal = data
        }
      )

  }

  ngOnDestroy(): void{
    this.suscripcion.unsubscribe()
    if (this.suscripcionGetDocument){
      this.suscripcionGetDocument.unsubscribe()
    }
  }
}
