import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  miForm!: FormGroup;
  private formBuilder!: FormBuilder;
  constructor(private injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.setBuild();
  }

  ngOnInit(): void {}

  setBuild() {
    this.miForm = this.formBuilder.group({
      genero: ['F', [Validators.required]],
      notificaciones: [true, [Validators.required]],
      condiciones: [false, [Validators.requiredTrue]],
    });
  }

  onSubmit() {
    this.miForm.markAllAsTouched();
    if (this.miForm.invalid) return;

    console.log('Form', this.miForm.getRawValue());
  }
}
