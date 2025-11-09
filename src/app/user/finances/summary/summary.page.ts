import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonNote, IonContent, IonButton, IonLabel, IonIcon, IonItem, IonChip, IonPopover, IonRadioGroup, IonRadio, IonModal, IonSearchbar, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { addIcons } from 'ionicons';
import { chevronForward, filter, add, remove, notifications, notificationsOutline, pin, calendarOutline, close, calendar, arrowUpOutline, arrowUpCircleOutline, arrowDownCircleOutline, searchOutline, closeOutline, search } from 'ionicons/icons';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration, ChartData,  } from 'chart.js';
import { NumberFlowComponent } from 'src/app/shared/components/number-flow/number-flow.component';
import { Format } from 'number-flow';
import { currencyNumberFlowFormat } from 'src/app/shared/classes/number-constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBowlRice, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
  standalone: true,
  providers: [
    provideCharts(withDefaultRegisterables()),
  ],
  imports: [IonSearchbar, IonRadio, IonRadioGroup, IonList, IonPopover, FontAwesomeModule, IonChip, IonItem, IonIcon, IonLabel, IonButton, IonContent, CommonModule, FormsModule, HeaderComponent, BaseChartDirective, NumberFlowComponent, IonNote]
})
export class SummaryPage implements OnInit {

  faBowlRice = faBowlRice;
  faBriefcase = faBriefcase;

  @ViewChild(NumberFlowComponent) appNumberFlow?: NumberFlowComponent;
  value: number = 0;

  currencyNumberFlowFormat: Format = currencyNumberFlowFormat;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    indexAxis: "y",
    animation: false,
    elements: {
      bar: {
        borderWidth: 4,
        borderColor: "transparent",
      }
    },
    scales: {
      x: {
        stacked: true,
        max: 100,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    onClick(event, elements, chart) {
        console.log(event, elements);
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "start",
        labels: {
          font: {
            family: "'Manrope', sans-serif",
            size: 16,
            weight: 400,
          },
          useBorderRadius: true,
          borderRadius: 8,
          boxWidth: 14,
          boxHeight: 14,
        }
      },
      tooltip: {
        enabled: false,
      }
    },
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['Payment cycle'],
    datasets: [
      { data: [50], label: 'Delivery food', backgroundColor: "oklch(92.2% 0 0)", hoverBackgroundColor: "oklch(37.9% 0.146 265.522)" },
      { data: [20], label: 'Services', backgroundColor: "oklch(87% 0 0)", hoverBackgroundColor: "oklch(37.9% 0.146 265.522)" },
      { data: [30], label: 'Loans', backgroundColor: "oklch(70.8% 0 0)", hoverBackgroundColor: "oklch(37.9% 0.146 265.522)" },
    ],
  };

  constructor(
    
  ) {
    addIcons({search,filter,close,arrowDownCircleOutline,arrowUpCircleOutline,arrowUpOutline,add,calendarOutline,remove,notificationsOutline,pin,notifications,chevronForward,});
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.appNumberFlow) {
      setTimeout(() => {
        this.value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      }, 500);
    }
  }

}
