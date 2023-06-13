import { Component, Injector, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  Validators
} from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  // TODO: temporal

  meForm!: FormGroup;
  private formBuilder!: FormBuilder;

  constructor(
    private injector: Injector,
    private validatorService: ValidatorService
  ) {
    this.formBuilder = injector.get(FormBuilder);
    this.setBuild();
  }

  ngOnInit(): void {}

  setBuild() {
    this.meForm = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPudeSerStrider],
      ],
      password: ['', [Validators.required, Validators.maxLength(6)]],
      password2: ['', [Validators.required]]
    }, {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ]
    });
  }

  campoNoValido(campo: string) {
    return this.meForm.get(campo)?.invalid && this.meForm.get(campo)?.touched;
  }

  submitForm() {
    this.meForm.markAllAsTouched();
  }
}
