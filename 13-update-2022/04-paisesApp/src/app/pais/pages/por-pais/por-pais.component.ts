import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  hayError: boolean = false;
  paises: Country[] = [];
  termino: string = '';
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log('data', paises);
        this.paises = [...paises];
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  get valTermino(): string {
    return this.termino;
  }

  sugerencias(termino: string): void {
    if (termino.trim().length === 0) {
      this.mostrarSugerencias = false;
      return;
    }

    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paisesSugeridos = [...paises].slice(0, 5);
      },
      (error) => (this.paisesSugeridos = [])
    );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
