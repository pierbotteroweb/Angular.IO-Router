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
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildCComponent } from './child-c/child-c.component';
import { ChildDComponent } from './child-d/child-d.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    ChildCComponent,
    ChildDComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule //IMPORTANDO ROUTING MODULE PARA NG-MODULE - PARTE DA CONFIG BASICA DE UM APP COM USO DE ROTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
