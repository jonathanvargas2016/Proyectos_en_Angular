import { Injectable } from '@angular/core';

//jsonp
import {HttpClient} from '@angular/common/http';

//map
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = 'd58e0e5de8490126176c83a0513ed40e'
  private themoviedb = 'https://api.themoviedb.org/3/movie'
  public peliculas:any[]=[]


  constructor(private http:HttpClient) { }
//metodo para extraer peliculas entre dos fechas
  getCartelera(){

    let desde = new Date()
    let hasta = new Date()
    hasta.setDate(hasta.getDate() + 7)

    let desdeString = this.transformFecha(desde)
    let hastaString = this.transformFecha(hasta)

    let url = `${this.themoviedb}/now_playing?api_key=${this.apiKey}&primary_release_date.gte=${desdeString}&primary_release_date.lte=${hastaString}&language=es&callback=JSONP_CALLBACK`

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe(map((res:any) =>{
      return res.results
    }))
  }

  getNowPlaying(){

    let url = `${this.themoviedb}/now_playing?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url,'JSONP_CALLBACK').pipe(map(res =>{
      return res['results']
    }))
  }

  getPopulares(){

    let url = `${this.themoviedb}/popular?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe(map((res:any) =>{
      return res.results
    }))
  }

  getUpcoming(){
    let url = `${this.themoviedb}/upcoming?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe(map((res:any) =>{
      return res.results
    }))
  }

  searchMovie(termino:string){

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=es&query=${termino}&limit=20&callback=JSONP_CALLBACK`
    return this.http.jsonp(url,'JSONP_CALLBACK').pipe(map((res:any[]) =>{
      this.peliculas = res['results']
      console.log(this.peliculas)
      return res['results']
    }))
  }

  getMovie(id:string){

    let url =`${this.themoviedb}/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe(map(res=>{
      return res
    }))

  }

  transformFecha(value: Date): string {

    let anio = value.getFullYear()
    let mes = value.getMonth()+1
    let dia = value.getDate()


    let fechaString = ""
    fechaString += anio

    if(mes < 10) {
      fechaString += `-0${mes}`
    }else{
      fechaString += `-mes`
    }
    if(dia < 10){

      fechaString += `-0${dia}`
    }else{
      fechaString += `-${dia}`
    }

    return fechaString ;
  }

}
