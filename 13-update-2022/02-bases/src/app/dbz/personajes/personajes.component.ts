import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from 'src/app/interfaces/ipersonaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  constructor(private readonly dbzService: DbzService) {}

  ngOnInit(): void {}

  get personajes() {
    return this.dbzService.personajes;
  }
}
