import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-one',
  templateUrl: './grafica-one.component.html',
  styleUrl: './grafica-one.component.scss'
})
export class GraficaOneComponent {
  labels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [350, 450, 100] },
    ],
  }

}
