import { AfterViewInit, Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '@services/gif.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';
import { GifListComponent } from '../../components/grid-list/gif-list.component';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.scss'
})



export default class TrendingPageComponent implements AfterViewInit {


  private readonly _gifService = inject(GifService)
  private readonly _scrollStateService = inject(ScrollStateService)
  imageUrls = computed(() => this._gifService.trendingGifs())
  trendingGifGroup = computed(() => this._gifService.trendingGifGroup())
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    // Set initial scroll position from the service
    scrollDiv.scrollTop = this._scrollStateService.trendingScrollState();
  }

  onScroll(_$event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop; //posicion que tenemos de scroll actualmente. Scroll hecho desde arriba
    const clientHeight = scrollDiv.clientHeight; //altura del viewport, lo que el usuario ve
    const scrollHeight = scrollDiv.scrollHeight; //altura total del contenido, lo que tengo de scroll hecho

    // 300px de gracias para hacer la peticion antes de llegar al final

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight
    this._scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this._gifService.loadTrendingGifs();
    }

    // piezas necesarias para el scroll infinito
    // viewpoint lo que el user 600px
    // scrollHeight indica el espacio que hice scroll hasta el momento

  }

}
