import { Component, OnInit } from '@angular/core';

//servicios
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading = true;

  constructor(private _heroeService: HeroesService) {
  }

  ngOnInit(): void {
    this._heroeService.getAllHeroes()
      .subscribe((data: any) => {

        setTimeout( () => {
          this.heroes = data;
          this.loading = false;
        }, 1000);
      });
  }

  borrarHeroe(key$: string): void{

    this._heroeService.borrarHeroeFirebase(key$)
        .subscribe(respuesta => {

          if (respuesta){
            console.error(respuesta);
          }else{
            // metodos de js
            delete this.heroes[key$];
          }
        });
  }
}
