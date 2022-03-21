import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string;

  arreglo:any[]=[]

  PI:number

  a:number

  salario:number

  heroe:Heroe

  valoPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('llego la data'),3500)
  })

  fecha = new Date();

  nombre2:string
  video:string
  nombre3:string
  bandera:boolean

  constructor(){
    this.nombre='Jonathan'
    this.arreglo = [1,2,3,4,5,6,7,8,9,10]
    this.PI=Math.PI
    this.a = 0.2469
    this.salario = 5420

    this.heroe={
      nombe:"Logan",
      clave:"Wolverine",
      edad:500,
      direccion:{
        calle:"Primera",
        casa:"20"
      }
    }
    this.nombre2 = "jOnathan vARgas NIlve"
    this.video = "7Zr_eX0rWpY"
    this.nombre3 = "Jonathan1234"
    this.bandera=false
  }
}


export interface Heroe{
  nombe:string,
  clave:string,
  edad:number,
  direccion:{
    calle:string,
    casa:string
  }
}
