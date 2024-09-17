import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrl: './promesas.component.scss'
})
export class PromesasComponent implements OnInit {


  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {

      if (false) {
        resolve('Hola mundo')
      } else {
        reject('Algo salio mal')
      }

    })

    promesa.then((value) => {
      console.log(value)
    }).catch((err) => {
      console.log(err)

    })

    this.getUsuarios().then((usuarios) => { console.log(usuarios) })

  }

  getUsuarios() {

    const promesa = new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => resolve(body.data))
    })

    return promesa;

  }

}
