import { Component, input, signal } from '@angular/core';
import type { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters = input.required<Character[]>()
  listName = input.required<string>()
}
