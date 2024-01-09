import { Component, Injector, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  miFormulario!: FormGroup;
  newFavorite!: FormControl;

  private formBuilder!: FormBuilder;
  constructor(private injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.newFavorite = new FormControl('', Validators.required);
    this.setBuild();
  }

  ngOnInit(): void {
    console.log(this.miFormulario.getRawValue());
  }

  setBuild() {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      favoritos: this.formBuilder.array(
        [
          ['Metal Gear', Validators.required],
          ['Death Stranding', Validators.required],
        ],
        Validators.required
      ),
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
      return;
    }
    console.log(this.miFormulario.value);
  }

  get favoritos() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  addFavorite() {
    if (this.newFavorite.invalid) return;
    this.favoritos.push(
      new FormControl(this.newFavorite.value, Validators.required)
    );
    this.newFavorite.reset();
  }

  deleteItem(index: number) {
    this.favoritos.removeAt(index);
  }

  submit() {}
}
