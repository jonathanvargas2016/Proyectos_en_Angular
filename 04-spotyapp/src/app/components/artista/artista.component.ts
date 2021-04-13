import { Component } from '@angular/core';

//importar libreria para extraer info del link
import {ActivatedRoute} from '@angular/router';

//servicio
import { SpotyAppService } from 'src/app/services/spoty-app.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artista:any={}
  loading:boolean;
  topTracks:any[]=[]

  constructor(private activatedRoute:ActivatedRoute, private spotyApp: SpotyAppService) {
    this.loading = true

    this.activatedRoute.params.subscribe(params =>{
        this.getArtista(params.id);
        this.getTopTracks(params.id);
      
    })



  }

  getArtista(id:string){

    this.spotyApp.getArtista(id).subscribe(data =>{
      this.artista = data
      this.loading = false
      console.log(this.artista)
    })

  }

  getTopTracks(id:string){
    this.spotyApp.getTopTracks(id).subscribe((data:any) =>{
      this.topTracks = data
      this.loading = false
      console.log(this.topTracks)
    })

  }


}
