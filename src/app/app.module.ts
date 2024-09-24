import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';  // Importe o RouterModule
import { AppComponent } from './app.component'; // Incluir o AppComponent 

import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './core/components/components.module'; // Incluir o AppComponent 

@NgModule({
  declarations: [AppComponent,  HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,  // Adicione RouterModule 
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
