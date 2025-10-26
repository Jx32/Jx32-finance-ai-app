import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonButton, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import { LogoIconComponent } from './shared/components/logo-icon/logo-icon.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonButtons, IonButton, RouterLink, RouterLinkActive, IonApp, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, LogoIconComponent],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home' },
    { title: 'Personal finances', url: '/user/finances/summary' },
    { title: 'AI.Forecasts', url: '/user/finances/forecasts' },
    { title: 'Loans', url: '/user/finances/loans' },
    { title: 'Services', url: '/user/finances/services' },
  ];

  constructor() {
    addIcons({ close });
  }
}
