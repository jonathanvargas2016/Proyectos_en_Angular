import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems: any[] = []
  private sidebarService = inject(SidebarService);
  constructor(){
    this.menuItems = this.sidebarService.menu
  }
}
