import { Component, OnInit, OnDestroy } from '@angular/core';
import {InfoPersonalService} from "../../../../../Servicios/infoPersonal.service";
import {ActivatedRoute, Router} from "@angular/router";

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
        this.documentId = params.id
        this.informacionPersonal = document
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
    try {
      resp = await this.infoPerService.actualizarInfoPersonal(this.documentId, this.informacionPersonal)
    }catch (e) {

    }
    if(resp){
      await this.router.navigateByUrl('/administracion/informacion-personal')
    }else{

    }
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
