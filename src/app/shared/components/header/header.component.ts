import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonLabel, IonButton, IonIcon, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, chatbubbles, chatbubblesOutline, notifications, notificationsOutline, personCircle, personCircleOutline, sparkles } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonBackButton, IonIcon, IonButton, IonItem, IonLabel, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton],
})
export class HeaderComponent  implements OnInit {

  @Input() showBackUIOnly: boolean = false;
  @Input() title: string = "";
  @Input() defaultHref: string = "/home";

  constructor() {
    addIcons({notificationsOutline, chatbubblesOutline,notifications,personCircle,arrowBack,chatbubbles,sparkles});
  }

  ngOnInit() {}

}
