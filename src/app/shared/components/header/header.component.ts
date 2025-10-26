import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonIcon, IonButton, IonItem, IonLabel, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton],
})
export class HeaderComponent  implements OnInit {

  constructor() {
    addIcons({notificationsOutline,personCircleOutline});
  }

  ngOnInit() {}

}
