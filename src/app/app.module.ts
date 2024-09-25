import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';  // Importe o RouterModule
import { AppComponent } from './app.component'; // Incluir o AppComponent 

import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './core/components/components.module'; // Incluir o AppComponent 
import {ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [AppComponent,  HomeComponent, ContentComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,  // Adicione RouterModule 
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
