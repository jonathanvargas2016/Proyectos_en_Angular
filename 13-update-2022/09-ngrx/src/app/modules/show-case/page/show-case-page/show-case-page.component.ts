import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from 'src/app/state/actions/items.actions';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    //dispatch deben tener una accion.
    this.store.dispatch(loadItems())
  }
}
