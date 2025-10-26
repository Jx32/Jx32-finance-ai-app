import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss'],
  imports: [],
})
export class LogoIconComponent implements OnInit {

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() hexColor: string = '#4B5563';

  constructor() { }

  ngOnInit() {}

  getSizeInPixels(): number {
    switch (this.size) {
      case 'small':
        return 95;
      case 'medium':
        return 110;
      case 'large':
        return 143;
      default:
        return 48;
    }
  }

}
