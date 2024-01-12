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
      text: "Sacar la basura",
      done: false
    },
    {
      text: "Lavar el carro",
      done: false
    },
  ]

  constructor(){}

  applyValue(event: any): void {

    console.log(event);

    this.list[event.position].done = event.checked
    const task = this.list[event.position]
    this.list.splice(event.position, 1)

    if(event.checked){
      this.list.push(task)
    }else {
      this.list.unshift(task)
    }

    console.log("list", this.list);


  }

  removeFromList(position: number){
    this.list.splice(position, 1)
  }

  addTask(event: any){
    this.list.unshift({text: event.text, done: event.done})
  }
}
