import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  hayError: boolean = false;
  paises: Country[] = [];
  termino: string = '';
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(paises => {
      console.log("data",paises)
      this.paises = [...paises];
    }, error => {
      this.hayError = true;
      this.paises = [];
    });
  }

  get valTermino(): string {
    return this.termino;
  }

  sugerencias(termino: string): void {
    this.hayError = false;
  }

}
