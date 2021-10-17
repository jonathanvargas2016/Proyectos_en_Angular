import {Component, OnDestroy, OnInit} from '@angular/core';
import {InfoPersonalService} from "../../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-info-per',
  templateUrl: './card-info-per.component.html',
  styleUrls: ['./card-info-per.component.css']
})
export class CardInfoPerComponent implements OnInit, OnDestroy {

  suscripcion: Subscription
  documentos: any = [];

  constructor(
    public readonly infoPerService: InfoPersonalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.suscripcion = this.infoPerService.getInfoPersonal().subscribe(resp =>{
      this.documentos = resp
    },error => {

      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Hubo un problema',
        text: 'No se pudo extraer los datos',
      })
    })

  }
  async eliminar(id: string){
    let respEliminar: boolean = false
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
        respEliminar = await this.infoPerService.eliminarInfoPersonal(id)
      }catch (e) {
        await Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: "No se pudo eliminar",
          showConfirmButton: true,
        })
      }
    }
    if(respEliminar){
      await Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      await Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: "No se pudo eliminar",
        showConfirmButton: true,
      })
    }
  }
  async getIdDocument(id: string){
    await this.router.navigateByUrl(`administracion/informacion-personal/${id}`)
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }
}
