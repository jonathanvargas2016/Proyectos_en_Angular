import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from 'src/app/interfaces/ipersonaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  @Input() personajes: IPersonaje[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
