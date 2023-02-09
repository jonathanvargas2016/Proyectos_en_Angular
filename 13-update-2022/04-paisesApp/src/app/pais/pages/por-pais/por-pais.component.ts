import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino = new FormControl('')
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino.value);
    if(this.termino.value?.trim().length === 0) return;
    this.termino.reset()
    this.paisService.buscarPais(this.termino.value!).subscribe(data => {
      console.log(data)
    });
  }

}
