import { Component, OnInit, signal, Signal, ViewChild, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonNote, IonContent, IonButton, IonLabel, IonIcon, IonItem, IonChip, IonPopover, IonRadioGroup, IonRadio, IonModal, IonSearchbar, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { addIcons } from 'ionicons';
import { chevronForward, filter, add, remove, notifications, notificationsOutline, pin, calendarOutline, close, calendar, arrowUpOutline, arrowUpCircleOutline, arrowDownCircleOutline, searchOutline, closeOutline, search, ellipse, chevronUpOutline, chevronDownOutline } from 'ionicons/icons';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration, ChartData,  } from 'chart.js';
import { NumberFlowComponent } from 'src/app/shared/components/number-flow/number-flow.component';
import { Format } from 'number-flow';
import { currencyNumberFlowFormat } from 'src/app/shared/utils/number-constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBowlRice, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/shared/interfaces/item.interface';
import { findItem } from 'src/app/shared/utils/item-utils';
import { datePeriodFilterItems, typeFilterItems } from './constants/summary-filter-constants';

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

  datePeriod: WritableSignal<Item> = signal(findItem("paymentCycle", datePeriodFilterItems)!);
  type: WritableSignal<Item> = signal(findItem("all", typeFilterItems)!);

  faBowlRice = faBowlRice;
  faBriefcase = faBriefcase;

  @ViewChild(NumberFlowComponent) appNumberFlow?: NumberFlowComponent;
  value: number = 0;

  currencyNumberFlowFormat: Format = currencyNumberFlowFormat;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    indexAxis: "y",
    animation: false,
    elements: {},
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
      legend: { display: false },
      tooltip: { enabled: false },
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
    addIcons({filter,ellipse,chevronUpOutline,chevronDownOutline,search,close,arrowDownCircleOutline,arrowUpCircleOutline,arrowUpOutline,add,calendarOutline,remove,notificationsOutline,pin,notifications,chevronForward,});
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

  datePeriodChanged({detail}: any) {
    this.datePeriod.set(
      findItem(detail.value, datePeriodFilterItems)!
    );
  }
  typeChanged({detail}: any) {
    this.type.set(
      findItem(detail.value, typeFilterItems)!
    );
  }
  spentTypeChanged({detail}: any) {
    
  }
  resetSpentTypeFilter() {
    
  }

  get datePeriodFilterItems() {
    return datePeriodFilterItems;
  }
  get typeFilterItems() {
    return typeFilterItems;
  }

}
