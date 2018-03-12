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



const pagesRoutes: Routes = [
    {
            path: '',
            component: PagesComponent,
            children: [
                { path: 'dashboard', component: DashboardComponent },


                { path: 'status', component: StatusComponent },


                { path: 'wages', component: WagesComponent },
                { path: 'sponsor', component: SponsorComponent },
                { path: 'balance', component: BalanceComponent },

                { path: 'league', component: LeagueComponent },
                { path: 'tournament', component: TournamentComponent },
                { path: 'champions', component: ChampionsComponent },
                { path: 'europe', component: EuropeComponent },

                { path: 'leaguecal', component: LeaguecalComponent },
                { path: 'tournamentcal', component: TournamentcalComponent },
                { path: 'championscal', component: ChampionscalComponent },
                { path: 'europecal', component: EuropecalComponent },

                { path: 'agreements', component: AgreementsComponent },
                { path: 'auctions', component: AuctionsComponent },
                { path: 'clauses', component: ClausesComponent },
                { path: 'transferables', component: TransferablesComponent },

                { path: 'freeplayers', component: FreeplayersComponent },
                { path: 'byteams', component: ByteamsComponent },

                { path: 'news', component: NewsComponent },
                { path: 'rules', component: RulesComponent },
                { path: 'managers', component: ManagersComponent },

                { path: 'chat', component: ChatComponent },
                { path: 'notifications', component: NotificationsComponent },

                { path: 'add', component: AddComponent },
                { path: 'create', component: CreateComponent },
                { path: 'step1', component: Step1Component },
                { path: 'step2', component: Step2Component },
                { path: 'join', component: JoinComponent },
                { path: 'private', component: PrivateComponent },
                { path: 'random', component: RandomComponent },

                { path: 'ads', component: AdsComponent },

                { path: 'player', component: PlayerdetailComponent },

                { path: 'progress', component: ProgressComponent },
                { path: 'graficas1', component: Graficas1Component },
                { path: 'account-settings', component: AccountSettingsComponent },
                { path: 'league-settings', component: LeagueSettingsComponent },
                { path: 'profile', component: ProfileComponent },
                { path: 'records', component: RecordsComponent },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
            ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
