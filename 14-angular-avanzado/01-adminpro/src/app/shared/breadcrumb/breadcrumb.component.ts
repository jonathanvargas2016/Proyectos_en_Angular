import { Component, inject, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnDestroy {

  title: string = ''
  tituloSubs$: Subscription = new Subscription()
  private router = inject(Router)

  constructor() {
    this.tituloSubs$ = this.getArgumentsRoute().subscribe(({ title }) => this.title = title)

  }

  getArgumentsRoute() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map(event => event.snapshot.data)
    )
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }


}
