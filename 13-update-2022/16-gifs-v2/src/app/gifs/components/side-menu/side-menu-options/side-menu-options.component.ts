import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '@services/gif.service';

@Component({
  selector: 'gifs-side-menu-options',
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.scss',
  imports: [RouterLink, RouterLinkActive]
})
export class SideMenuOptionsComponent {


  menuOptions: MenuOption[] = [
    {
      icon: "fa-solid fa-chart-line",
      label: "Trending",
      subLabel: "Gifs populares",
      route: "trending"
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      label: "Search",
      subLabel: "Buscar gifs",
      route: "search"
    }
  ]

  
  private readonly _gifService = inject(GifService);
  historykeys  = computed(() => this._gifService.searchHistoryKeys());


}


interface MenuOption {
  label: string,
  subLabel: string,
  route: string,
  icon: string
}