import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

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


}


interface MenuOption {
  label: string,
  subLabel: string,
  route: string,
  icon: string
}