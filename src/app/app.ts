import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-scrum-deploy');
}

export class Track {
  public nombreCancion: string;
  public artista: string;
  public url: string;
  public caratula: string;

  constructor(
    nombreCancion: string,
    artista: string,
    url: string,
    caratula: string
  ) {
    this.nombreCancion = nombreCancion;
    this.artista = artista;
    this.url = url;
    this.caratula = caratula;
  }
}