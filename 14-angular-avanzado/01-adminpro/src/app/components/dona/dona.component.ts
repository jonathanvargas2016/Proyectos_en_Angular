import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrl: './dona.component.scss'
})
export class DonaComponent implements OnInit {

  @Input() title: string = ""
  @Input() labels: string[] = ['Label1','Label2', 'Label3'];
  @Input() data:  ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [500, 100, 100] },
    ],
  }

  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
