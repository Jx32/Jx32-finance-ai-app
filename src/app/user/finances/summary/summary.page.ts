import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonItem, IonSelect, IonSelectOption, IonSegmentView, IonSegmentContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { addIcons } from 'ionicons';
import { chevronForward, filter } from 'ionicons/icons';
import { BaseChartDirective, provideCharts, ThemeService, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { Scale } from 'chart.js/dist';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
  standalone: true,
  providers: [
    provideCharts(withDefaultRegisterables()),
  ],
  imports: [IonItem, IonIcon, IonLabel, IonSegmentButton, IonSegment, IonButton, IonContent, CommonModule, FormsModule, HeaderComponent, IonSelect, IonSelectOption, IonSegmentView, IonSegmentContent, BaseChartDirective]
})
export class SummaryPage implements OnInit {

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 0,
      }
    },
    scales: {
      x: {
        stacked: true,
        max: 95,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          font: {
            family: "'Manrope', sans-serif",
            size: 16,
            weight: 500,
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
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Delivery food', backgroundColor: "red" },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Services', backgroundColor: "green" },
    ],
  };

  constructor(
    private themeService: ThemeService
  ) {
    addIcons({ filter, chevronForward });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    
  }

}
