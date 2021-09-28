import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medios-modal',
  templateUrl: './medios-modal.component.html',
  styleUrls: ['./medios-modal.component.css']
})
export class MediosModalComponent implements OnInit {

  constructor() { }
  bandera=false
  ngOnInit(): void {
  }

  capturarImagen(event: any){
  }
  cambiarBandera(){
    this.bandera = !this.bandera
  }

  resetearInputImg(){
    const input = <HTMLFormElement>document.getElementById('forma');
    input.reset()
  }
}
