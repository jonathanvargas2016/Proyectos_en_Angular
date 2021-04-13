import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>

    <h1>Memo</h1>
  `,
  styles: [`

    p {
      color:red;
      font-size:20px;
    }

    h1 {
      color:green;
      font-size:20px
    }


    `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
