import { Component, computed, inject, signal } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { DragonBallService } from 'src/app/services/dragon-ball.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  characters = signal<Character[]>([])

  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })

  private dragonBallService = inject(DragonBallService)

  constructor() {
    this.getData()
  }

  addCharacter(character: Character) {
    this.dragonBallService.addCharacter(character)
    this.getData()

  }

  getData() {
    this.characters.update(() => [...this.dragonBallService.characters])
  }



}

