import {Component,OnInit, Input} from '@angular/core';
import {InfoPersonalService} from "../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-informacion-personal-form',
  templateUrl: './informacion-personal-form.component.html',
  styleUrls: ['./informacion-personal-form.component.css']
})
export class InformacionPersonalFormComponent implements OnInit {

  @Input() documentInfoPersonal: any
  informacionPersonal: any = {
    nombres: '',
    titulo: '',
    perfilProfesional: '',
    motivacion: '',
  }
  mensajes: any = []

  constructor(
    public readonly infoPerService: InfoPersonalService,
    private messageService: MessageService
  ) {

  }

  ngDoCheck(): void {
    // this.mensajes = []
    // if(this.documentInfoPersonal){
    //   this.informacionPersonal = {
    //     nombres: this.documentInfoPersonal.nombres,
    //     titulo: this.documentInfoPersonal.titulo,
    //     perfilProfesional: this.documentInfoPersonal.perfilProfesional,
    //     motivacion: this.documentInfoPersonal.motivacion,
    //   }
    // }
  }

  ngOnInit(): void {
  }
  // capturarFotoPerfil(eventFP: any): any{
  //    this.imagenCapturada = eventFP.target.files[0]
  // }
  // capturarCV(event: any):any{
  //   this.pdfCapturado = event.target.files[0]
  // }

  // verificarErrores(){
  //   if(this.imagenCapturada == undefined){
  //     this.existeErrorImg = true;
  //     this.mensajes.push(
  //       {
  //         severity: 'error',
  //         summary: 'Foto de perfil',
  //         detail:'Debe seleccionar una foto'
  //       }
  //     )
  //   }else{
  //     this.existeErrorImg = false
  //   }
  //
  //   if(this.pdfCapturado == undefined){
  //     this.existeErrorPdf = true;
  //     this.mensajes.push(
  //       {
  //         severity: 'error',
  //         summary: 'Curriculum',
  //         detail:'Debe seleccionar el CV'
  //       }
  //     )
  //   }else{
  //     this.existeErrorPdf = false
  //   }
  //   this.messageService.addAll(this.mensajes)
  //
  // }

  async guardarDatosmodal(forma: any) {
    // var myModalEl:  any = document.getElementById('exampleModal')
    // myModalEl.addEventListener('hidePrevented.bs.modal',  (event: any) =>{
    //   console.log("entro")
    // })

    // Swal.fire({
    //   title: 'Desea guardar los datos?',
    //   text: 'Tus datos se guardarán y podrás modificarlos mas tarde',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Si, guardar datos'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     if (this.imagenCapturada && this.pdfCapturado) {
    //       this.infoPerService.cargarFormInfoPerson(this.informacionPersonal,
    //         this.imagenCapturada,
    //         this.pdfCapturado, forma);
    //     }
    //   }
    // })

    let respInfoService
    try {
      const resp = await Swal.fire({
        title: 'Desea guardar los datos?',
        text: 'Tus datos se guardarán y podrás modificarlos mas tarde',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, guardar datos'
      })
      if(resp.isConfirmed){
        respInfoService = await this.infoPerService.cargarFormInfoPerson(this.informacionPersonal);
      }
    } catch (e) {
      this.messageService.add(
        {
          severity: 'error',
          summary: 'Error',
          detail: e.message
        }
      );
      forma.reset()
    }
    if (respInfoService){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos guardados',
        showConfirmButton: false,
        timer: 1500
      })
      forma.reset()
    }else{
      this.messageService.add(
        {
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo cargar'
        }
      );
      forma.reset()
    }
  }
  resetearForma(){
    const forma = <HTMLFormElement>document.getElementById('forma');
    forma.reset()
  }
}

