import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  hayError: boolean = false;
  capitales: Country[] = [];
  termino: string = '';

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPorCapital(this.termino).subscribe(capitales => {
      this.capitales = [...capitales];
    }, error => {
      this.hayError = true;
      this.capitales = [];
    });
  }

  get valTermino(): string {
    return this.termino;
  }

  sugerencias(termino: string): void {
    this.hayError = false;
  }

}
