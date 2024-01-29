
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {

  listData: any = []

  constructor() {


    of([1,2,3,4], "jpa")
    from(1,2,3,4)


  }

  ngOnInit(): void {
    // this.showCase.getDataApi()
    //   .subscribe((res) => {
    //     this.listData = res
    //   })
  }


}
