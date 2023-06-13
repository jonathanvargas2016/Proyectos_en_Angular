import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces/imenu-item';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  templateMenu: IMenuItem[] = [
    {
      texto: 'Basicos',
      ruta: './template/basicos',
    },
    {
      texto: 'Dinamicos',
      ruta: './template/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './template/switches',
    },
  ];

  reactiveMenu: IMenuItem[] = [
    {
      texto: 'Basicos',
      ruta: './reactive/basicos',
    },
    {
      texto: 'Dinamicos',
      ruta: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches',
    },
  ];

  authMenu: IMenuItem[] = [
    {
      texto: 'Registro',
      ruta: './auth/registro'
    },
    {
      texto: 'login',
      ruta: './auth/login'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
