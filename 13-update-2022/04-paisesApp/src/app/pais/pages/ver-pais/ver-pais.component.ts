import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country; // tratalo como si tuviera data...

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id}) => {
    //     this.paisService.getPaisPorCodigo(id).subscribe(pais => {
    //       console.log(pais);
    //     })
    // })

    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.getPaisPorCodigo(param['id'])), // operador de transformacion. Permite recibir un observable y devolver otro observavle...
        tap((pais: Country) => console.log(pais)) // operador que dispara un efecto secundario...
      )
      .subscribe((pais: Country) => (this.pais = { ...pais }));
  }

}
