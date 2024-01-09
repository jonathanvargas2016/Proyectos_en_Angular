import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  persona: Persona = {
    nombre: 'Goku',
    favoritos: [
      {
        id: 1,
        nombre: 'Metar Gear',
      },
      {
        id: 2,
        nombre: 'God of War',
      },
    ],
  };

  nuevoJuego: string = '';
  constructor() {}

  ngOnInit(): void {}

  submit() {}

  deleteItem(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
  addFavorite() {
    if (this.nuevoJuego.trim().length === 0) return;
    const newFavorite: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push({ ...newFavorite });
    this.nuevoJuego = '';
  }
}
