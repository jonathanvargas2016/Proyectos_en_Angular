import {Component, OnInit} from '@angular/core';
import {InfoPersonalService} from "../../Servicios/infoPersonal.service";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  constructor(public readonly infoPers: InfoPersonalService) {
  }

  ngOnInit(): void {
  }
}
