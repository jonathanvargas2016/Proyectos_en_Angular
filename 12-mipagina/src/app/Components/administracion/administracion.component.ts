import {Component, OnInit} from '@angular/core';
import {MipaginaService} from "../../Servicios/mipagina.service";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  constructor(private paginaService: MipaginaService) {
  }

  ngOnInit(): void {

  }
}
