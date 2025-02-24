import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent {
  public counter = signal<number>(10);
  public squareCounter = computed(() => this.counter() * this.counter()); //propiedad de solo lectura
  // si lo igualamos a couter = 10 en la actualizacion pasara por todo el ciclo de vida

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
