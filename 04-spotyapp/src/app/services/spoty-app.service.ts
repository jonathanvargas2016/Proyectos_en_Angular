import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

//operador map
import {map} from 'rxjs/operators';

@Injectable({
  //mediante esta linea ya no se importa en module.ts
  providedIn: 'root'
})
export class SpotyAppService {


  constructor(private http:HttpClient) {
    console.log("servicio listo")

   }

   getQuery(query:string){
     const url = `https://api.spotify.com/v1/${query}`
     const headers = new HttpHeaders({
          'Authorization':'Bearer BQCfNm2GdXkV7YVWbqg0HesAKKJO9ZzBa9XlON7OPu8GyjBz1d-P5RldIyfL4Z3ir03ZCZUMPdeeZ5TPmEM'
        })

      return this.http.get(url,{headers})

   }

  getNewReleases(){

    return this.getQuery('browse/new-releases?Limit=20')
              .pipe(map(data =>{
                return data['albums'].items
              }))
  }

   // getNewReleases(){
   //   //headers porq algunas apis piden autenticacion.
   //   const headers = new HttpHeaders({
   //     'Authorization':'Bearer BQDoFVpfypDHNw7Ht9gFrdqTMTrr7MarOdkUtMEEmUahYuujFJjgw-mznDVNXNQZw2cscpu98np4W61HqoM'
   //   })
   //   return this.http.get('https://api.spotify.com/v1/browse/new-releases?Limit=20',{headers})
   //          .pipe(map( data => {
   //            return data['albums'].items
   //          } ))
   // }

   getArtistas(termino:string){
     //1forma, se modifico completar
     //return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers})

     //2 forma
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe(map(data => data['artists'].items))

   }



   getArtista(id:string){

     return this.getQuery(`artists/${id}`)

   }

   getTopTracks (id:string){

     return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map((data:any) => data.tracks))



    }
}
