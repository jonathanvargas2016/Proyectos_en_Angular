import {Component, OnInit, Input} from '@angular/core';
import {InfoPersonalService} from "../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-informacion-personal-form',
  templateUrl: './informacion-personal-form.component.html',
  styleUrls: ['./informacion-personal-form.component.css']
})
export class InformacionPersonalFormComponent implements OnInit{
  modalInfoPersonal: HTMLElement | null
  informacionPersonal: any = {
    nombres: '',
    titulo: '',
    perfilProfesional: '',
    motivacion: '',
    urlImagen: ''
  }
  mensajes: any = []

  constructor(
    public readonly infoPerService: InfoPersonalService,
  ) {}
  ngOnInit(): void {
  }
  async guardarDatosmodal(forma: any) {
    let respInfoService
    const resp = await Swal.fire({
      title: 'Desea guardar los datos?',
      text: 'Tus datos se guardarán y podrás modificarlos mas tarde',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar datos'
    })
    if (resp.isConfirmed) {
      try {
        respInfoService = await this.infoPerService.cargarFormInfoPerson(this.informacionPersonal);
      } catch (e) {
        await Swal.fire({
          icon: 'error',
          title: 'Hubo un problema',
          text: 'No se pudo cargar los datos',
        })
      }
      if (respInfoService) {
        await Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos guardados',
          showConfirmButton: false,
          timer: 1500
        })
        forma.reset()
      } else {
        await Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Hubo un problema',
          text: 'No se pudo cargar los datos',
        })
        forma.reset()
      }
    }else{
      forma.reset()
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

}

