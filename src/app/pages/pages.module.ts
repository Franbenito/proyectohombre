import { NgModule } from '@angular/core';

// Módulos

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

// Rutas

import { PAGES_ROUTES } from './pages.routes';

// Ng2-charts

import { ChartsModule } from 'ng2-charts';

// Temporal

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        HomeComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],

    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        HomeComponent
    ],

    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})

export class PageModule { }
