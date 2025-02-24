import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  // menuList: Menu[] = [
  //   {
  //     label: 'Login',
  //     route: 'auth/login',
  //   },
  //   {
  //     label: 'Register',
  //     route: 'auth/register',
  //   },
  //   {
  //     label: 'Edit Client',
  //     route: 'client/edit',
  //   },
  //   {
  //     label: 'Clients',
  //     route: 'client/list',
  //   },
  //   {
  //     label: 'Señales',
  //     route: 'signal',
  //   },
  // ];

  public menuItems = signal<Menu[]>([
    {
      label: 'Login',
      route: 'auth/login',
    },
    {
      label: 'Register',
      route: 'auth/register',
    },
    {
      label: 'Edit Client',
      route: 'client/edit',
    },
    {
      label: 'Clients',
      route: 'client/list',
    },
    {
      label: 'Señales',
      route: 'signal',
    },
  ]);

  constructor() {
  }
}

interface Menu {
  label: string;
  route: string;
}
