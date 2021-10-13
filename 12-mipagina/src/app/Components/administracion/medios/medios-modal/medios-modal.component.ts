import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FileItem} from "../../../../Modelos/FileItem";
import {CargarArchivosService} from "../../../../Servicios/cargar-archivos.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-medios-modal',
  templateUrl: './medios-modal.component.html',
  styleUrls: ['./medios-modal.component.css']
})
export class MediosModalComponent implements OnInit {
  @Output() urlImagenSeleccionada = new EventEmitter<string>();
  @Output() cerrar = new EventEmitter<boolean>()
  archivosImg: FileItem[] = []
  archivos: any = []
  imagenes: any = []
  constructor(public readonly cargarArchivoService: CargarArchivosService) { }
  bandera=false

  ngOnInit(): void {
    this.cargarArchivoService.getImagenes().subscribe((resp)=>{
      this.imagenes = resp
    }, error => {})
  }
  capturarImagen(event: any){
    this.archivos = event.target.files
    if(this.archivos.length > 0){
      for (const archivo of this.archivos){
        const imagen = new FileItem(archivo)
        this.archivosImg.push(imagen)
      }
      this.bandera = false;
    }else{
      this.archivosImg = []
    }
  }

  cambiarBandera(){
    this.bandera = true
  }

  resetearFormImg(){
    this.cerrar.emit(true)
    const forma = <HTMLFormElement>document.getElementById('formaModalImg');
    forma.reset()
    this.bandera = false
    this.archivos = []
  }
  cargarImagenes(){
    if(this.archivos){
      this.cargarArchivoService.cargarImagenes(this.archivosImg)
      this.resetearFormImg()
      this.bandera = true
    }else{
      this.bandera = false
      return
    }
  }
  async eliminarImg(id: string, path: string){
    let resp
    const respSwal = await Swal.fire({
      title: 'Desea eliminar?',
      text:'Tus datos eliminados no se podrán recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    })
    if(respSwal.isConfirmed){
      try {
        resp = await this.cargarArchivoService.eliminarImagen(id, path)
      }catch (e) {
        await Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: "No se pudo eliminar",
          showConfirmButton: true,
        })
      }
      if(resp){
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
  }
  seleccionarImg(url: string){
    this.urlImagenSeleccionada.emit(url)
    this.resetearFormImg()
  }
}
