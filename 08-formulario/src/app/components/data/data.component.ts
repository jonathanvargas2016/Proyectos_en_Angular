import { Component } from '@angular/core';

// importaciones para formularios y validaciones
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  // responsable del maneko de la forma
  forma: FormGroup;
  ejemploEmail = 'example@email.com';

  constructor() {
// la forma recibe un objeto
    this.forma = new FormGroup({
      // FormControl recibe un valor por defecto, en este caso el valor Jonathan
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });

  }

  guardarCambios(): void{
    console.log(this.forma.value);
    console.log(this.forma);

  }


}
