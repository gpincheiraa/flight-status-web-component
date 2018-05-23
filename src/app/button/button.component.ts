import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'flight-status',
  template: `
    <div class="card-wrapper" *ngIf="data">
      <section class="card">
        <header>
          <h1 class="card-header">Flight {{ data.flight }}</h1>
        </header>
      </section>
      <section class="card">
        <header>
          <h1 class="card-header">Origin {{ data.origin.code }}, {{ data.origin.city }} </h1>
        </header>
      </section>
      <section class="card">
          <header>
            <h1 class="card-header">Destination {{ data.destination.code }}, {{ data.destination.city }} </h1>
          </header>
      </section>
    </div>
  `,
  styles: [`
    .card-wrapper{
      width: 40vw;
      overflow: visible;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .card{
      position: relative;
      width: 18vw;
      padding: 16px;
      margin-bottom: 60px;
      text-align: center;
      background-color: #150067;
      box-sizing: border-box;
      color: #FFFFFF;
    }
    .card-header{
      padding-bottom: 8px;
      border-bottom: 1px solid #B30F3B;
      margin: 0;
      text-transform: capitalize;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  @Input() data: any;
}