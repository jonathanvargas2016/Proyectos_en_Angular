import {Component,OnInit} from '@angular/core';
import {InfoPersonalService} from "../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-informacion-personal-form',
  templateUrl: './informacion-personal-form.component.html',
  styleUrls: ['./informacion-personal-form.component.css']
})
export class InformacionPersonalFormComponent implements OnInit {

  bandera=true
  usuario = {
    nombre: '',
    apellido: ''
  }
espera = false;
  cargado = false
  informacionPersonal: any = {
    nombres: '',
    titulo: '',
    perfilProfesional: '',
    motivacion: '',
    imagen: '',
    pdfCV: ''
  }
  imagenCapturada: any
  pdfCapturado: any
  existeErrorImg = false;
  existeErrorPdf = false;
  mensajes: any = []
  constructor(
    public readonly infoPerService: InfoPersonalService,
    private messageService: MessageService
  ) {}

  ngDoCheck(): void {
    this.mensajes = []
  }

  addMultiple() {
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
      {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  capturarFotoPerfil(eventFP: any): any{
     this.imagenCapturada = eventFP.target.files[0]
  }
  capturarCV(event: any):any{

    this.pdfCapturado = event.target.files[0]
  }

  verificarErrores(){
    if(this.imagenCapturada == undefined){
      this.existeErrorImg = true;
      this.mensajes.push(
        {
          severity: 'error',
          summary: 'Foto de perfil',
          detail:'Debe seleccionar una foto'
        }
      )
    }else{
      this.existeErrorImg = false
    }

    if(this.pdfCapturado == undefined){
      this.existeErrorPdf = true;
      this.mensajes.push(
        {
          severity: 'error',
          summary: 'Curriculum',
          detail:'Debe seleccionar el CV'
        }
      )
    }else{
      this.existeErrorPdf = false
    }
    this.messageService.addAll(this.mensajes)

  }

  guardarDatosmodal(forma: any) {
    // var myModalEl:  any = document.getElementById('exampleModal')
    // myModalEl.addEventListener('hidePrevented.bs.modal',  (event: any) =>{
    //   console.log("entro")
    // })

    Swal.fire({
      title: 'Desea guardar los datos?',
      text: 'Tus datos se guardarán y podrás modificarlos mas tarde',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar datos'
    }).then((result) => {
      if (result.isConfirmed) {
        this.verificarErrores();
        if (this.imagenCapturada && this.pdfCapturado) {
          this.infoPerService.cargarFormInfoPerson(this.informacionPersonal,
            this.imagenCapturada,
            this.pdfCapturado, forma);
        }
      }
    })


  }

  resetearForma(){
    const forma = <HTMLFormElement>document.getElementById('forma');
    forma.reset()
  }

}

