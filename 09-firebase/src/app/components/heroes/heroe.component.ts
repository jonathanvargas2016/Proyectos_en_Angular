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

  id: string;

  constructor(private router: Router,
              private heroeService: HeroesService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(parametros => {
      this.id = parametros.id;

      if (this.id !== 'nuevo'){

        this.heroeService.getHeroe(this.id)
          .subscribe((data: any) => {
            this.heroe = data;
          });
      }
    });
  }

  ngOnInit(): void {
  }

  guardar(): void{

    if (this.id === 'nuevo'){
      // insertando

      this.loading = true;
      this.heroeService.nuevoHeroe(this.heroe)
        .subscribe((data: any) => {
          this.router.navigate(['/heroes']);
        }, error => {
          console.error(error);
        });
    }else{
      // actualizando

      this.loading = true;
      this.heroeService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
          this.router.navigate(['/heroes']);
        }, error => {
          console.error(error);
        });
    }

  }

  agregarNuevo(forma: NgForm): void{
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: this.casas[0]
    });
  }

}
