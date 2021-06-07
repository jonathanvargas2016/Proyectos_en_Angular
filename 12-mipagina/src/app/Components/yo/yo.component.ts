import { Component, OnInit } from '@angular/core';
import {MipaginaService} from "../../Servicios/mipagina.service";

@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.css']
})
export class YoComponent implements OnInit {
  banderaEmailP = false;
  banderaEmailI = false;
  banderaUbicacion = false;
  banderaGithub = false;
  banderaTelf = false;
  banderaLink = false;

  arrayInfoPersonal: any[] = []

  informacionContacto = {
    correoPersonal: 'jonathan.1996mds@gmail.com',
    correoInstitucional: 'jonathan.vargas01@epn.edu.ec',
    celular: '0983774891',
    direccion: 'Quito - Ecuador',
  }

  habilidades = ['Javascript', 'Typescript', 'Firebase', 'SQL Server', 'Angular', 'NestJS'
    ,'HTML', 'CSS', 'MySQL', 'Java', 'React']

  constructor(private paginaService: MipaginaService) { }

  ngOnInit(): void {
    this.paginaService.getInfoPersonal().subscribe((datos)=>{
      this.arrayInfoPersonal[0] = datos[0]
    })
  }
  cambiarBanderaEmailP(): boolean{
    return this.banderaEmailP = !this.banderaEmailP;
  }
  cambiarBanderaEmailI(): boolean{
    return this.banderaEmailI = !this.banderaEmailI;
  }
  cambiarBanderaUbicacion(): boolean{
    return this.banderaUbicacion = !this.banderaUbicacion;
  }
  cambiarBanderaTelf(): boolean{
    return this.banderaTelf = !this.banderaTelf;
  }
  cambiarBanderaLink(): boolean{
    return this.banderaLink = !this.banderaLink;
  }
  cambiarBanderaGithub(): boolean{
    return this.banderaGithub = !this.banderaGithub;
  }

}
