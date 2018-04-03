import { RouterModule, Routes } from '@angular/router';



import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { TransferablesComponent } from './market/transferables/transferables.component';
import { StatusComponent } from './team/status/status.component';
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
import { ClausesComponent } from './market/clauses/clauses.component';
import { AgreementsComponent } from './market/agreements/agreements.component';
import { AuctionsComponent } from './market/auctions/auctions.component';
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
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




const pagesRoutes: Routes = [
    {
            path: '',
            component: PagesComponent,
            children: [
                { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Escritorio' } },


                { path: 'status', component: StatusComponent,  data: { titulo: 'Estado' }  },


                { path: 'wages', component: WagesComponent,  data: { titulo: 'Salarios' } },
                { path: 'sponsor', component: SponsorComponent,  data: { titulo: 'Patrocinador' } },
                { path: 'balance', component: BalanceComponent,  data: { titulo: 'Finanzas' } },

                { path: 'league', component: LeagueComponent,  data: { titulo: 'Clasificaciones Liga' } },
                { path: 'tournament', component: TournamentComponent,  data: { titulo: 'Clasificaciones Copa' } },
                { path: 'champions', component: ChampionsComponent,  data: { titulo: 'Clasificaciones Champions League' } },
                { path: 'europe', component: EuropeComponent,  data: { titulo: 'Clasificaciones Europa League' } },

                { path: 'leaguecal', component: LeaguecalComponent,  data: { titulo: 'Calendario Liga' } },
                { path: 'tournamentcal', component: TournamentcalComponent,  data: { titulo: 'Calendario Copa' } },
                { path: 'championscal', component: ChampionscalComponent,  data: { titulo: 'Calendario Champions League' } },
                { path: 'europecal', component: EuropecalComponent,  data: { titulo: 'Calendario Europa League' } },

                { path: 'agreements', component: AgreementsComponent,  data: { titulo: 'Acuerdos' } },
                { path: 'auctions', component: AuctionsComponent,  data: { titulo: 'Subastas' } },
                { path: 'clauses', component: ClausesComponent,  data: { titulo: 'Cláusulas' } },
                { path: 'transferables', component: TransferablesComponent,  data: { titulo: 'Transferibles' } },

                { path: 'freeplayers', component: FreeplayersComponent,  data: { titulo: 'Jugadores libres' } },
                { path: 'byteams', component: ByteamsComponent,  data: { titulo: 'Jugadores por equipos' } },

                { path: 'news', component: NewsComponent,  data: { titulo: 'Noticias' } },
                { path: 'rules', component: RulesComponent,  data: { titulo: 'Normas' } },
                { path: 'managers', component: ManagersComponent,  data: { titulo: 'Managers' } },

                { path: 'chat', component: ChatComponent,  data: { titulo: 'Chat' } },
                { path: 'notifications', component: NotificationsComponent,  data: { titulo: 'Notificaciones' } },

                { path: 'add', component: AddComponent,  data: { titulo: 'Agregar una liga' } },
                { path: 'create', component: CreateComponent,  data: { titulo: 'Crear una liga' } },
                { path: 'step1', component: Step1Component,  data: { titulo: 'Paso 1' } },
                { path: 'step2', component: Step2Component,  data: { titulo: 'Paso 2' } },
                { path: 'join', component: JoinComponent,  data: { titulo: 'Unirse a una liga' } },
                { path: 'private', component: PrivateComponent,  data: { titulo: 'Liga privada' } },
                { path: 'random', component: RandomComponent,  data: { titulo: 'Liga aleatoria' } },

                { path: 'ads', component: AdsComponent,  data: { titulo: 'Publicidad' } },

                { path: 'player', component: PlayerdetailComponent,  data: { titulo: 'Jugador' } },

                { path: 'progress', component: ProgressComponent,  data: { titulo: 'Progress' } },
                { path: 'graficas1', component: Graficas1Component,  data: { titulo: 'Gráficas' } },
                { path: 'promesas', component: PromesasComponent,  data: { titulo: 'Promesas' } },
                { path: 'rxjs', component: RxjsComponent,  data: { titulo: 'Rxjs' } },
                { path: 'account-settings', component: AccountSettingsComponent,  data: { titulo: 'Ajustes de la cuenta' } },
                { path: 'league-settings', component: LeagueSettingsComponent,  data: { titulo: 'Ajustes de la liga' } },
                { path: 'profile', component: ProfileComponent,  data: { titulo: 'Perfil' } },
                { path: 'records', component: RecordsComponent,  data: { titulo: 'Récords' } },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
            ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
