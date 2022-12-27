import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080T'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),

  // });

  // TRABAJANDO CON EL FORMBUILDER: es un serrvicio

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(1)]],
    existencias: [, [Validators.required, Validators.min(1)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: "RJ45",
      precio: 450,
      existencias: 200
    })
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      console.log("error en el formulario")
      return 
    }
    console.log("mi formulario", this.miFormulario);
    this.miFormulario.reset()

  }
}
