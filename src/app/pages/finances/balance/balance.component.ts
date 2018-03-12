import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styles: []
})
export class BalanceComponent implements OnInit {


  graficos: any = {
    'grafico1': {
      'labels': ['Fichajes', 'Sponsor', 'TVs', 'Competiciones'],
      'data':  [110, 34, 65, 96],
      'type': 'doughnut',
      'leyenda': 'Ingresos'
    },
    'grafico2': {
      'labels': ['Fichajes', 'Salarios', 'Sanciones', 'Otros gastos'],
      'data':  [101, 74, 30, 18],
      'type': 'doughnut',
      'leyenda': 'Gastos'
    },
    'grafico3': {
      'labels': ['Inicio', 'Temporada 1',  'Temporada 2', 'Temporada 3', 'Temporada 4', 'Temporada 5', 'Temporada 6'],
      'data':  [0, 450, 600, 530, 550, 0, -150],
      'type': 'line',
      'leyenda': 'Balance'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
