import { isPlatformServer } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  output,
  PLATFORM_ID,
} from '@angular/core';
import NumberFlowLite, {
  Format,
  formatToData,
  renderInnerHTML,
  type Data,
  type Value,
} from 'number-flow';


@Component({
  selector: 'app-number-flow',
  standalone: true,
  templateUrl: './number-flow.component.html',
  styleUrl: './number-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NumberFlowComponent {
  
  public locales = input<string | string[]>();
  public format = input<Format>();
  public value = input.required<Value>();
  public prefix = input<string>();
  public suffix = input<string>();
  public willChange = input<boolean>(false);
  public transformTiming = input(NumberFlowLite.defaultProps.transformTiming);
  public spinTiming = input(NumberFlowLite.defaultProps.spinTiming);
  public opacityTiming = input(NumberFlowLite.defaultProps.opacityTiming);
  public animated = input(NumberFlowLite.defaultProps.animated);
  public respectMotionPreference = input(NumberFlowLite.defaultProps.respectMotionPreference);
  public trend = input(NumberFlowLite.defaultProps.trend);
  public digits = input(NumberFlowLite.defaultProps.digits);
  public plugins = input(NumberFlowLite.defaultProps.plugins);
  
  public animationsstart = output();
  public animationsfinish = output();
  
  public formatter = computed(
    () => new Intl.NumberFormat(this.locales(), this.format()),
  );
  public data = computed<Data>(() =>
    formatToData(this.value(), this.formatter(), this.prefix(), this.suffix()),
  );
  public innerHtml = computed(() =>
    renderInnerHTML(this.value(), {
      locales: this.locales(),
      format: this.format(),
      numberPrefix: this.prefix(),
      numberSuffix: this.suffix(),
    }),
    
  );
  public isBrowser = isPlatformServer(inject(PLATFORM_ID));
}