import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnDestroy {

  private intervalSubs: Subscription = new Subscription();
  constructor() {

    // this.retornaObservable().pipe(
    //   retry(2) // si la suscripcion falla vuelve a intentar 1 vez mas.
    //   ,map((value) => value * 10 )
    // )
    //   .subscribe({
    //     next: (valor) => {
    //       console.log(valor)
    //     }, error: (err) => {
    //       console.log(err)

    //     },
    //     complete: () => {
    //       console.log('obs terminado')

    //     }
    //   })

    this.intervalSubs = this.retornaIntervalo().subscribe(
      console.log
    )
  }


  retornaIntervalo(): Observable<number> {
    return interval(1000).pipe(
      map((value) => value + 1),
      filter((value) => value % 2 === 0),
      //take(10),
    )
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {

        i++;
        observer.next(i)

        if (i === 4) {
          clearInterval(intervalo)
          observer.complete()
        }

        if (i === 2) {
          observer.error('i llego al 2')
        }
      }, 1000)
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }

}
