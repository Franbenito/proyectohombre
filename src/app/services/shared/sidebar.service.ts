import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Plantilla',
      icono: 'mdi mdi-tshirt-crew',
      submenu: [
        { titulo: 'Estado del equipo', url:  '/status' }
      ]

    }
  ];

  menu2: any = [
    {
      titulo2: 'Finanzas',
      icono2: 'mdi mdi-currency-eur',
      submenu2: [
        { titulo: 'Salarios', url:  '/wages' },
        { titulo: 'Sponsor', url:  '/sponsor' },
        { titulo: 'Balance', url:  '/balance' }
      ]

    }
  ];

  menu3: any = [
    {
      titulo3: 'Clasificaciones',
      icono3: 'mdi mdi-trophy',
      submenu3: [
        { titulo: 'Liga', url:  '/league' },
        { titulo: 'Copa del Rey', url:  '/tournament' },
        { titulo: 'Champions League', url:  '/champions' },
        { titulo: 'Europa League', url:  '/europe' }
      ]

    }
  ];

  menu4: any = [
    {
      titulo4: 'Calendario',
      icono4: 'mdi mdi-calendar-range',
      submenu4: [
        { titulo: 'Liga', url:  '/leaguecal' },
        { titulo: 'Copa del Rey', url:  '/tournamentcal' },
        { titulo: 'Champions League', url:  '/championscal' },
        { titulo: 'Europa League', url:  '/europecal' }
      ]

    }
  ];

  menu5: any = [
    {
      titulo5: 'Fichajes',
      icono5: 'mdi mdi-transit-transfer',
      submenu5: [
        { titulo: 'Transferibles', url:  '/transferables' },
        { titulo: 'Acuerdos', url:  '/agreements' },
        { titulo: 'Subastas', url:  '/auctions' },
        { titulo: 'Cláusulas', url:  '/clauses' }
      ]

    }
  ];

  menu6: any = [
    {
      titulo6: 'Jugadores',
      icono6: 'mdi mdi-human-greeting',
      submenu6: [
        { titulo: 'Por equipos', url:  '/byteams' },
        { titulo: 'Jugadores libres', url:  '/freeplayers' }
      ]
    }
  ];

  menu7: any = [
    {
      titulo7: 'Liga',
      icono7: 'mdi mdi-wallet-travel',
      submenu7: [
        { titulo: 'Noticias', url:  '/news' },
        { titulo: 'Normas', url:  '/rules' },
        { titulo: 'Managers', url:  '/managers' }
      ]
    }
  ];

  constructor() { }

}
