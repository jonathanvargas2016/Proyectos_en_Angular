import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

// para las validaciones asincronas
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html'
})
export class Data2Component {

  // responsable del maneko de la forma
  forma:FormGroup

  usuario: any = {
    nombreCompleto: {
      nombre: 'Jonathan',
      apellido: 'Vargas',
    }, direccion: {
      barrio: 'San luis de chillogallo'
    },
    email: 'example@gmail.com',
    pasatiempos: ['ver TV', 'programar']
  };

  bandera = true;

  ejemploEmail = 'example@email.com';

  constructor() {

    this.forma = new FormGroup({

      nombreCompleto : new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, this.noApellidoVargas])
      }),
      direccion: new FormGroup({
        barrio: new FormControl('', Validators.required)
      }),

      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      pasatiempos : new FormArray([
          new FormControl('', Validators.required)
      ]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl(),
      usuario: new FormControl('', Validators.required, this.existeUsuario)
    });

    // otra forma de asignar validaciones.
    this.forma.controls['password2'].setValidators(
      // puedo especificar un o un arreglo de validaciones
      [Validators.required,
      this.noIgualPasswords.bind(this.forma)]// toca definir que es el valor de this(nuestra forma).Se utiliza la funcion bind()

    );

    // un obsrvador para que este pendiente de los cambios de la data
    this.forma.controls['usuario'].valueChanges
        .subscribe(data => {
          console.log(data);

        });

        this.forma.controls['usuario'].statusChanges
            .subscribe(data => {
              console.log(data);

            });

    // carga de forma automatica los valores en la forma
    // this.forma.setValue(this.usuario)
  }

  agregarPasatiempo(): void{

    // al definir <FormArray> me permite usar el metodo push

    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('',Validators.required)
    )

    if (this.forma.controls['pasatiempos']['controls'].length > 1){
      this.bandera = false;
    }
    //console.log("sube ",this.forma.controls['pasatiempos']['controls'].length)
  }

  eliminarPasatiempo(){

    (<FormArray>this.forma.controls['pasatiempos']).removeAt(this.forma.controls['pasatiempos']['controls'].length-1)

    // console.log("baja ",this.forma.controls['pasatiempos']['controls'].length)

    if(this.forma.controls['pasatiempos']['controls'].length == 1){
      this.bandera = true;
    }
}

  //lo ideal es tener un archivo de validaciones
//me permite controlar que no ingrese el valor vargas
  noApellidoVargas(control:FormControl):{[s:string]:boolean}{

    if(control.value === "vargas"){
      return {
        novargas:true
      }
    }

    return null
  }

  //validar password1
  noIgualPasswords(control: FormControl): any{
    let forma: any = this;
    // this.forma = this porque ya se definio en la funcion bind()
    if (control.value !== forma.controls['password1'].value){
      return{
        noiguales:true
      };
    }
    return null;

  }

  existeUsuario(control:FormControl):Promise<any> | Observable<any>{

    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'jona'){
            resolve({existe: true})
          }else{
            resolve(null);
          }
        }, 3000);
      }
    )

    return promesa;
  }

  guardarCambios(): void{
    console.log(this.forma.value);
    console.log(this.forma);


    // volver a recargar la forma 1
    /*this.forma.reset({
      nombreCompleto:{
        nombre:"",
        apellido:""
      },direccion:{
        barrio:""
      },
      email:""
    })
    // 2 forma
    //this.forma.controls['email'].setValue("a@gmail.com")*/

  }

}
