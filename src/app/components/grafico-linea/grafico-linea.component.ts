import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-linea',
  templateUrl: './grafico-linea.component.html',
  styles: []
})
export class GraficoLineaComponent implements OnInit {

 @Input('chartLabels') public lineChartLabels: string[] = [];
 @Input('chartData') public lineChartData: any[] = [];
 @Input('chartType') public lineChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}

