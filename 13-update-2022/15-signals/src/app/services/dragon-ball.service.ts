import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {

  const data = localStorage.getItem('characters')

  return data ? JSON.parse(data) : []
}


@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  charactersValue = signal<Character[]>(loadFromLocalStorage())

  //effects solo tengan una tarea.
  public saveToLocalStorage = effect(() => {
    localStorage.setItem("characters", JSON.stringify(this.charactersValue()))
  })



  addCharacter(character: Character) {
    this.charactersValue.update((items) => [...items, character])
  }

  get characters(): Character[] {
    return this.charactersValue()
  }
}
