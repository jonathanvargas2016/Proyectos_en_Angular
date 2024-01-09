import { Component, Injector, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
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
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {
    this.formBuilder = injector.get(FormBuilder);
    this.setBuild();
  }

  ngOnInit(): void {}

  setBuild() {
    this.meForm = this.formBuilder.group(
      {
        nombre: [
          'Jonathan Vargas',
          [
            Validators.required,
            Validators.pattern(this.validatorService.nombreApellidoPattern),
          ],
        ],
        email: [
          'example@example.com',
          [
            Validators.required,
            Validators.pattern(this.validatorService.emailPattern),
          ],
          [this.emailValidator],
        ],
        username: [
          'jonathan1028',
          [Validators.required, this.validatorService.noPudeSerStrider],
        ],
        password: ['Mds123456', [Validators.required, Validators.minLength(6)]],
        password2: ['Mds123456', [Validators.required]],
      },
      {
        validators: [
          this.validatorService.camposIguales('password', 'password2'),
        ],
      }
    );
  }

  campoNoValido(campo: string) {
    return this.meForm.get(campo)?.invalid && this.meForm.get(campo)?.touched;
  }

  get errorMsg(): string {
    const errors = this.email.errors;
    if(errors?.['required']){
      return 'El correo es requerido';
    } else if(errors?.['pattern']){
      return 'El correo es invalido';
    }else if (errors?.['emailTomado']){
      return 'El correo ya existe'
    }
    return ''
    
  }

  submitForm() {
    this.meForm.markAllAsTouched();
    if (this.meForm.invalid || this.meForm.pending) return;
    console.log('form valid', this.meForm.getRawValue());
  }



  // emailRequired(): boolean {
  //   return this.email.errors?.['required'] && this.email?.['touched'];
  // }

  // emailFormato(): boolean {
  //   return this.email.errors?.['pattern'] && this.email?.['touched'];
  // }

  // emailTomado(){
  //   return this.email.errors?.['emailTomado'] && this.email?.['touched'];

  // }

  get email() {
    return this.meForm.get('email') as FormControl;
  }
}
