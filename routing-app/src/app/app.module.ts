// ESTE É O APP.MODULE CRIAOD AUTIMATICAMENTE QUANDO
// CRIAMOS UM PROJETO ANGULAR POR CLI USANDO --ROUTING

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//IMPORTANDO ROUTING MODULE PARA NG-MODULE - PARTE DA CONFIG BASICA DE UM APP COM USO DE ROTAS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule //IMPORTANDO ROUTING MODULE PARA NG-MODULE - PARTE DA CONFIG BASICA DE UM APP COM USO DE ROTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
