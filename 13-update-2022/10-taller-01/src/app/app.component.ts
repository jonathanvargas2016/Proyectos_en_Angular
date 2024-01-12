import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  list: any = [
    {
      text: "Pasear al perro",
      done: true
    },
    {
      text: "Pasear al perro",
      done: false
    },
    {
      text: "Pasear al perro",
      done: false
    },
    {
      text: "Pasear al perro",
      done: true
    },

  ]

  constructor(){}

  applyValue(event: any): void {
    console.log(event)
    this.list[event.position].done = event.checked
  }

}
