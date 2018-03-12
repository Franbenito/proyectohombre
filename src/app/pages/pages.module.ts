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
import { GraficoLineaComponent } from '../components/grafico-linea/grafico-linea.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { StatusComponent } from './team/status/status.component';
import { TransferablesComponent } from './market/transferables/transferables.component';
import { WagesComponent } from './finances/wages/wages.component';
import { SponsorComponent } from './finances/sponsor/sponsor.component';
import { BalanceComponent } from './finances/balance/balance.component';
import { LeagueComponent } from './standings/league/league.component';
import { TournamentComponent } from './standings/tournament/tournament.component';
import { ChampionsComponent } from './standings/champions/champions.component';
import { EuropeComponent } from './standings/europe/europe.component';
import { LeaguecalComponent } from './calendar/leaguecal/leaguecal.component';
import { TournamentcalComponent } from './calendar/tournamentcal/tournamentcal.component';
import { ChampionscalComponent } from './calendar/championscal/championscal.component';
import { EuropecalComponent } from './calendar/europecal/europecal.component';
import { AgreementsComponent } from './market/agreements/agreements.component';
import { AuctionsComponent } from './market/auctions/auctions.component';
import { ClausesComponent } from './market/clauses/clauses.component';
import { FreeplayersComponent } from './database/freeplayers/freeplayers.component';
import { ByteamsComponent } from './database/byteams/byteams.component';
import { NewsComponent } from './institutional/news/news.component';
import { RulesComponent } from './institutional/rules/rules.component';
import { ManagersComponent } from './institutional/managers/managers.component';
import { ChatComponent } from './chat/chat.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LeagueSettingsComponent } from './league-settings/league-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { RecordsComponent } from './records/records.component';
import { AddComponent } from './add/add.component';
import { CreateComponent } from './add/create/create.component';
import { Step1Component } from './add/create/step1/step1.component';
import { Step2Component } from './add/create/step2/step2.component';
import { JoinComponent } from './add/join/join.component';
import { PrivateComponent } from './add/join/private/private.component';
import { RandomComponent } from './add/join/random/random.component';
import { AdsComponent } from './ads/ads.component';
import { PlayerdetailComponent } from './players/playerdetail/playerdetail.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        GraficoLineaComponent,
        AccountSettingsComponent,
        StatusComponent,
        TransferablesComponent,
        WagesComponent,
        SponsorComponent,
        BalanceComponent,
        LeagueComponent,
        TournamentComponent,
        ChampionsComponent,
        EuropeComponent,
        LeaguecalComponent,
        TournamentcalComponent,
        ChampionscalComponent,
        EuropecalComponent,
        AgreementsComponent,
        AuctionsComponent,
        ClausesComponent,
        FreeplayersComponent,
        ByteamsComponent,
        NewsComponent,
        RulesComponent,
        ManagersComponent,
        ChatComponent,
        NotificationsComponent,
        LeagueSettingsComponent,
        ProfileComponent,
        RecordsComponent,
        AddComponent,
        CreateComponent,
        Step1Component,
        Step2Component,
        JoinComponent,
        PrivateComponent,
        RandomComponent,
        AdsComponent,
        PlayerdetailComponent
    ],

    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],

    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})

export class PageModule { }
