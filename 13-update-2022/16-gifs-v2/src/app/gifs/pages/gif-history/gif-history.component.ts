import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifService } from '@services/gif.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifListComponent } from '../../components/grid-list/gif-list.component';

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
  styleUrl: './gif-history.component.scss'
})
export default class GifHistoryComponent {

  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));
  private readonly _gifService = inject(GifService);

  gifsByKey = computed(() => this._gifService.getHistoryGifs(this.query()));





}
