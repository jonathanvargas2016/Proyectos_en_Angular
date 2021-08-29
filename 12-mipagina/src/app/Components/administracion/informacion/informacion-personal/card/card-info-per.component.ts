import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {InfoPersonalService} from "../../../../../Servicios/infoPersonal.service";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-card-info-per',
  templateUrl: './card-info-per.component.html',
  styleUrls: ['./card-info-per.component.css']
})
export class CardInfoPerComponent implements OnInit {

  datosIP: any = [];
  constructor(
    private readonly router: Router,
    public readonly infoPerService: InfoPersonalService
  ) { }

  ngOnInit(): void {
    this.infoPerService.getInfoPersonal().subscribe((datos) =>{
      this.datosIP = datos;
    })
  }
  dirigirAgregar(){
    this.router.navigate(['administracion','informacion-personal','agregar'])
  }
  eliminar(i: number){
    console.log('id ' + i)
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
        const id = i.toString()
        this.infoPerService.eliminarInfoPersonal(id).then();
      }
    })






  }
}
