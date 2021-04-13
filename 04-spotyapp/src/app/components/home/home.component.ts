import { Component, OnInit } from '@angular/core';
import { SpotyAppService } from 'src/app/services/spoty-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSong:any[]=[]
  loading = true;

  error = false;
  mensaje = ""

constructor(private spotyApp: SpotyAppService){



  this.spotyApp.getNewReleases()
    .subscribe((data) =>{
    this.newSong = data;
    this.loading = false;

  }, (errorServicio) =>{
    this.loading = false;
    this.error = true;
    this.mensaje = errorServicio.error.error.message;
    console.log( this.mensaje)
  })
}
  ngOnInit(): void {
  }

}
