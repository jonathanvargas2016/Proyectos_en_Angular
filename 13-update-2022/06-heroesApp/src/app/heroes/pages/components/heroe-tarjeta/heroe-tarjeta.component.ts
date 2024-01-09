import { Component, inject, Injector, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '@modules/heroes/models/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe!: Heroe;
  private router!: Router;
  private activatedRoute!: ActivatedRoute;
  constructor(private injector: Injector) {
    this.router = injector.get(Router);
    this.activatedRoute = injector.get(ActivatedRoute);
  }

  ngOnInit(): void {}

  redirectTo(id: string, action: boolean) {
    const route = action ? '../' : '../editar';
    this.router.navigate([route, id], { relativeTo: this.activatedRoute });
  }
}
