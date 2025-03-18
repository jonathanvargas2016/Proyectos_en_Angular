import { Component, effect, output, signal } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css'
})
export class CharacterAddComponent {
  name = signal<string>('Gohan')
  power = signal(100)
  newCharacter = output<Character>()
  
  public nameEffect = effect(() => {
    console.log('name dbz', this.name())
  })
  addCharacter() {

    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    this.newCharacter.emit(newCharacter)
    this.resetFields()
  }

  resetFields(): void {
    this.name.set('')
    this.power.set(0)
  }
}
