import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private readonly gifsService: GifsService) {}

  ngOnInit(): void {}

  get historial(): string[] {
    return this.gifsService.historial;
  }

  buscar(termino: string): void {
    this.gifsService.buscarGifs(termino);
  }
}
