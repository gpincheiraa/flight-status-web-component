import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'flight-status',
  templateUrl: 'button.component.html',
  styleUrls: [
    'button.component.scss'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  @Input() data: any;
}