import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      BrowserModule,          // <- Solo aquí
      BrowserAnimationsModule // <- si usas animaciones
    )
  ]
});
