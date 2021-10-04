import {Component, OnDestroy, OnInit} from '@angular/core';
import {InfoPersonalService} from "../../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card-info-per',
  templateUrl: './card-info-per.component.html',
  styleUrls: ['./card-info-per.component.css']
})
export class CardInfoPerComponent implements OnInit, OnDestroy {
  modalInfoPersonal: HTMLElement | null
  suscripcion: Subscription
  suscripcionGetDocument: Subscription
  documentos: any = [];
  documentId: string
  informacionPersonal: any = {
    nombres: '',
    titulo: '',
    perfilProfesional: '',
    motivacion: '',
    urlImagen: ''
  }
  constructor(
    public readonly infoPerService: InfoPersonalService
  ) { }

  ngOnInit(): void {
    this.suscripcion = this.infoPerService.getInfoPersonal().subscribe(resp =>{
      this.documentos = resp
    })
  }

  async eliminar(id: string){
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
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
    if (this.suscripcionGetDocument) {
      this.suscripcionGetDocument.unsubscribe()
    }
  }
  resetearForma(){
    const forma = <HTMLFormElement>document.getElementById('forma');
    forma.reset()
    this.informacionPersonal.urlImagen = ''
  }
  conseguirUrlImg(url: string){
    this.informacionPersonal.urlImagen = url
    if(this.modalInfoPersonal){
      this.modalInfoPersonal.hidden = false
    }
  }
  ocultarModalInfoPersonal(){
    this.modalInfoPersonal = document.getElementById("modalInfoPersonal")
    if(this.modalInfoPersonal){
      this.modalInfoPersonal.hidden = true
    }
  }
  cerrarModalMedios(bandera: boolean){
    if(bandera){
      if(this.modalInfoPersonal){
        this.modalInfoPersonal.hidden = false
      }
    }
  }
  getIdDocument(id: string){
    this.infoPerService.getdocumentInfoPersonal(id).subscribe(document =>{
      this.informacionPersonal = document
    })
  }
  actualizarDatosmodal(){

  }

}
