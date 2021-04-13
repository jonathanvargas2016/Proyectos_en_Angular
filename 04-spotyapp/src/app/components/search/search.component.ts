import { Component, OnInit } from '@angular/core';
import { SpotyAppService } from 'src/app/services/spoty-app.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artistas:any[]=[]
  loading = true;
  mensaje = ""
  error = false

  constructor(private spotyApp: SpotyAppService) {
  }

  ngOnInit(): void {
  }

  buscar(termino:string){

    this.spotyApp.getArtistas(termino)
        .subscribe((data:any) =>{
          this.artistas = data;
          console.log(this.artistas)
          this.loading = false;

      }, (errorServicio) =>{
        this.loading = false;
        this.error = true
        this.mensaje = errorServicio.error.error.message

      })
  }


}
