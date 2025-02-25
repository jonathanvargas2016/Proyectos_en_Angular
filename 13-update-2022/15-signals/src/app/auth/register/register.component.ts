import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  characters = signal<Character[]>([
    {
      id: 1,
      name: "Goku",
      power: 9001
    },
    {
      id: 2,
      name: "Vegeta",
      power: 8000
    },
    {
      id: 3,
      name: "Piccolo",
      power: 3000
    },
    {
      id: 4,
      name: "Yamcha",
      power: 500
    }
  ])

  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })

  name = signal<string>('Gohan')
  power = signal(100)

  public nameEffect = effect(() => {
    console.log('name dbz', this.name())
  })

  constructor() {
  }

  addCharacter() {

    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((items) => [...items, newCharacter])
    this.resetFields()
  }

  resetFields(): void {
    this.name.set('')
    this.power.set(0)
  }

}

interface Character {
  id: number,
  name: string;
  power: number;
}