import { Component, OnInit } from '@angular/core';
import {InfoPersonalService} from "../../Servicios/infoPersonal.service";
import {InfoContactoService} from "../../Servicios/infoContacto.service";

@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.css']
})
export class YoComponent implements OnInit {
  banderaEmailP = false;
  banderaEmailI = false;
  banderaUbicacion = false;
  banderaTelf = false;
  arrayInfoPersonal: any[] = []
  arrayInfoContacto: any[] = []

  habilidades = ['Javascript', 'Typescript', 'Firebase', 'SQL Server', 'Angular', 'NestJS'
    ,'HTML', 'CSS', 'MySQL', 'Java', 'React']

  constructor(private readonly paginaService: InfoPersonalService,
              private readonly  infoContService: InfoContactoService ) { }

  ngOnInit(): void {
    this.paginaService.getInfoPersonal().subscribe(documentos =>{
      this.arrayInfoPersonal[0] = documentos[0].payload.doc.data()
    })
    this.infoContService.getInfoContacto().subscribe((datos) =>{
      this.arrayInfoContacto[0] = datos[0]
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

}
