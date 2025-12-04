import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css'],
  animations: [
    trigger('rubberBand', [
      transition('* => active', [
        animate('1s', keyframes([
          style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
          style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
          style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
          style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
          style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
          style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
          style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class ProdAnimadosComponent {
  rubberStates: string[] = [];

  triggerRubber(index: number) {
    this.rubberStates[index] = 'active';
    setTimeout(() => this.rubberStates[index] = 'inactive', 1000);
  }
}
