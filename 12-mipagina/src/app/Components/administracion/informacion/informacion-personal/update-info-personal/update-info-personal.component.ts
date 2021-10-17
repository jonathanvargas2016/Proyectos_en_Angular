import { Component, OnInit, OnDestroy } from '@angular/core';
import {InfoPersonalService} from "../../../../../Servicios/infoPersonal.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: 'app-update-info-personal',
  templateUrl: './update-info-personal.component.html',
  styleUrls: ['./update-info-personal.component.css']
})
export class UpdateInfoPersonalComponent implements OnInit, OnDestroy {
  modalInfoPersonal: HTMLElement | null
  suscripcionId: any
  suscripcionDocument: any
  documentId: any
  informacionPersonalInicial = {}
  informacionPersonal: any = {
    nombres: '',
    titulo: '',
    perfilProfesional: '',
    motivacion: '',
    urlImagen: ''
  }
  constructor(public readonly infoPerService: InfoPersonalService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.suscripcionId = this.activatedRoute.params.subscribe(params=>{
      this.infoPerService.getdocumentInfoPersonal(params.id).subscribe(document=>{
        console.log("documento**************", document)
        this.informacionPersonalInicial = document
        this.documentId = params.id
        this.informacionPersonal = this.informacionPersonalInicial
      }, error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Hubo un problema',
          text: 'No se pudo obtener los datos del usuario',
        })
      })
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Hubo un problema',
        text: 'No se pudo extraer el id del usuario',
      })
    })
  }
  ocultarModalInfoPersonal(){

  }
  async regresar(){
    try{
      await this.router.navigateByUrl('/administracion/informacion-personal')
    }catch (e){
      console.log(e)
    }
  }
  async actualizarDatosmodal(forma: any){
    let resp
    console.log("informacionPersonalInicial ---------", this.informacionPersonalInicial)
    console.log("informacionPersonal -------------", this.informacionPersonal)
    // const respSwal = await Swal.fire({
    //   title: 'Desea actualizar los datos?',
    //   text: 'Tus datos actualizados podrás modificarlos después',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Si, actualizar los datos'
    // })
    // if(respSwal.isConfirmed){
    //   try {
    //     resp = await this.infoPerService.actualizarInfoPersonal(this.documentId, this.informacionPersonal)
    //   }catch (e) {
    //     Swal.fire({
    //       position: 'top-end',
    //       icon: 'error',
    //       title: 'Hubo un problema',
    //       text: 'No se pudo actualizar la información',
    //     })
    //   }
    //   if(resp){
    //     await this.router.navigateByUrl('/administracion/informacion-personal')
    //     await Swal.fire({
    //       position: 'top-end',
    //       icon: 'success',
    //       title: 'Datos actualizados',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //   }else{
    //     await Swal.fire({
    //       position: 'top-end',
    //       icon: 'error',
    //       title: 'Hubo un problema',
    //       text: 'No se pudo actualizar la información',
    //     })
    //   }
    // }
  }
  conseguirUrlImg(url: any){
    this.informacionPersonal.urlImagen = url
  }
  ngOnDestroy(): void {
    if(this.suscripcionId){
      this.suscripcionId.unsubscribe()
    }
    if(this.suscripcionDocument){
      this.suscripcionDocument.unsubscribe()
    }
  }
}
