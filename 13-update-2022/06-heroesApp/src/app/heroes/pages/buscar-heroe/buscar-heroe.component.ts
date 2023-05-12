import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '@modules/heroes/models/heroe.interface';
import { HeroesService } from '@modules/heroes/services/heroes.service';
import { debounceTime, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css'],
})
export class BuscarHeroeComponent implements OnInit {
  termino: FormControl = new FormControl('');
  heroes!: Observable<Heroe[]>;
  heroeSelected!: Observable<Heroe>;
  constructor(private heroeService: HeroesService) {
    this.registerEvent();
  }

  ngOnInit(): void {}

  get terminoValue() {
    return this.termino.value;
  }

  registerEvent() {
    this.heroes = this.termino.valueChanges.pipe(
      debounceTime(300),
      switchMap((termino) => this.heroeService.getSugerencias(termino))
    );
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;
    this.termino.setValue(heroe.superhero);
    this.heroeSelected = this.heroeService.getHeroeById(heroe.id!);
  }
}
