import { Component, OnInit } from '@angular/core';

// Formularios
import {NgForm} from '@angular/forms';

// navegar a otro link
import {Router, ActivatedRoute} from '@angular/router';

// interface
import { Heroe } from 'src/app/interface/heroe.interface';

// servicio
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  casas = ['Marvel', 'DC'];
  heroe: Heroe = {
    nombre: '',
    casa: this.casas[0],
    bio: ''
  };

  loading = false;

  id = '';

  constructor(private router:Router,
              private _heroeService:HeroesService,
              private activatedRoute:ActivatedRoute) {

                this.activatedRoute.params.subscribe(parametros =>{
                  this.id = parametros.id

                  if(this.id != 'nuevo'){

                    this._heroeService.getHeroe(this.id)
                        .subscribe((data:any) =>{
                          this.heroe = data
                        })
                  }
              })
  }

  ngOnInit(): void {
  }

  guardar(forma: NgForm){
    console.log(forma);
    // if(this.id == 'nuevo'){
    //   //insertando
    //
    //   this.loading = true
    //   this._heroeService.nuevoHeroe(this.heroe)
    //       .subscribe((data:any) =>{
    //     this.router.navigate(['/heroe',data.name])
    //
    //     setTimeout(()=>this.loading = false,2000)
    //
    //   }, error =>{
    //     console.error(error)
    //   })
    // }else{
    //   //actualizando
    //
    //   this.loading = true
    //   this._heroeService.actualizarHeroe(this.heroe,this.id)
    //       .subscribe(data =>{
    //         console.log(data)
    //         setTimeout(()=>this.loading = false,2000)
    //       },error=>{
    //         console.error(error)
    //       })
    // }

  }

  agregarNuevo(forma:NgForm){
    this.router.navigate(['/heroe','nuevo'])
    forma.reset({
      casa:this.casas[0]
    })
  }

}
