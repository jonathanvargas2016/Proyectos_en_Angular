import { Injectable } from '@angular/core';

// para peticiones http
import {HttpClient, HttpHeaders} from '@angular/common/http';
// interface
import { Heroe } from 'src/app/interface/heroe.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroeUrl = 'https://heroesapp-b5ed5.firebaseio.com/heroes.json';

  heroeAUrl = 'https://heroesapp-b5ed5.firebaseio.com/heroes/';

  constructor(private http: HttpClient) {
  }

  nuevoHeroe(heroe: Heroe): any{

    // transformacion a un string valido de un json
    const body = JSON.stringify(heroe);
    //
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' /*toca decirle q es una app json*/
    });

    // observable que nos dice, si se inserto o q paso
    return this.http.post(this.heroeUrl, body, {headers});

  }

  actualizarHeroe(heroe: Heroe, key$: string): any{

    // transformacion a un string valido de un json
    const body = JSON.stringify(heroe);

    // no es necesario en la actualizacion
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' /*toca decirle q es una app json*/
    });

    const url = `${this.heroeAUrl}/${key$}.json`;

    // observable que nos dice, si se inserto o q paso
    return this.http.put(url, body, {headers});

  }

  getHeroe(key$: string): any{
    const url = `${this.heroeAUrl}/${key$}.json`;
    return this.http.get(url);
  }

  getAllHeroes(): any{
    return this.http.get(this.heroeUrl);
  }

  borrarHeroeFirebase(key$: string): any{

    const url = `${this.heroeAUrl}/${key$}.json`;
    return this.http.delete(url);
  }


}
