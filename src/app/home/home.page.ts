import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonItem, IonLabel, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
