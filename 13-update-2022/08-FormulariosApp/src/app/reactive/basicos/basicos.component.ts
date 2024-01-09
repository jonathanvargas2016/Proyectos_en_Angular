import { Component, Injector, OnInit } from '@angular/core';
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

  miFormulario!: FormGroup;
  private formBuilder!: FormBuilder;
  constructor(private injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.setBuild();
  }

  ngOnInit(): void {}

  setBuild() {
    this.miFormulario = this.formBuilder.group({
      nombre: ['RJ45', [Validators.required, Validators.minLength(3)]],
      precio: [450, [Validators.required, Validators.min(1)]],
      existencias: [200, [Validators.required, Validators.min(1)]],
    });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    this.miFormulario.markAllAsTouched();
    if (this.miFormulario.invalid) {
      console.log('error en el formulario');
      return;
    }
    console.log('mi formulario', this.miFormulario);
    this.miFormulario.reset();
  }
}
