import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonItem, IonSelect, IonSelectOption, IonSegmentView, IonSegmentContent, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonBadge } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { addIcons } from 'ionicons';
import { chevronForward, filter, add, remove, notifications, notificationsOutline } from 'ionicons/icons';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration, ChartData,  } from 'chart.js';
import { NumberFlowComponent } from 'src/app/shared/components/number-flow/number-flow.component';
import { Format } from 'number-flow';
import { currencyNumberFlowFormat } from 'src/app/shared/classes/number-constants';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
  standalone: true,
  providers: [
    provideCharts(withDefaultRegisterables()),
  ],
  imports: [IonBadge, IonCardHeader, IonCardSubtitle, IonCardContent, IonCard, IonButtons, IonItem, IonIcon, IonLabel, IonSegmentButton, IonSegment, IonButton, IonContent, CommonModule, FormsModule, HeaderComponent, IonSelect, IonSelectOption, IonSegmentView, IonSegmentContent, BaseChartDirective, NumberFlowComponent]
})
export class SummaryPage implements OnInit {

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
      { data: [50], label: 'Delivery food', backgroundColor: "oklch(70.7% 0.022 261.325)", hoverBackgroundColor: "#7C3AED" },
      { data: [20], label: 'Services', backgroundColor: "oklch(92.8% 0.006 264.531)", hoverBackgroundColor: "#7C3AED" },
      { data: [30], label: 'Loans', backgroundColor: "oklch(87.2% 0.01 258.338)", hoverBackgroundColor: "#7C3AED" },
    ],
  };

  constructor(
    
  ) {
    addIcons({add,remove,notificationsOutline,notifications,filter,chevronForward});
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log(this.appNumberFlow)
    
    if (this.appNumberFlow) {
      setInterval(() => {
        this.value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      }, 5000);

      this.value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    }
  }

}
