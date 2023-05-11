import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '@modules/heroes/models/heroe.interface';

@Component({
  selector: 'app-ver-heroe',
  templateUrl: './ver-heroe.component.html',
  styleUrls: ['./ver-heroe.component.css'],
})
export class VerHeroeComponent implements OnInit {
  heroe!: Heroe;
  private route!: ActivatedRoute;
  private location!: Location;

  constructor(private injector: Injector) {
    this.route = injector.get(ActivatedRoute);
    this.location = injector.get(Location);
  }

  ngOnInit(): void {
    const { heroe } = this.route.snapshot.data;
    setTimeout(() => {
      this.heroe = heroe;
    }, 1000);
  }

  returnListado() {
    this.location.back();
  }
}
