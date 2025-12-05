import { Component, signal } from '@angular/core';
import { CatalogoHWComponent } from './catalogo/catalogo-hw.component';

@Component({
  selector: 'app-root',
  imports: [CatalogoHWComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Halloween');
}
