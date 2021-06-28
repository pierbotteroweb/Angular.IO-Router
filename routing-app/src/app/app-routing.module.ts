import { NgModule, Query } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//CLI IMPORTA AUTOMATICAMENTE 

import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// SINTAXE BASICA DE OBJETO EM ITEM DA LISTA DE ROTAS
const routes: Routes = [
  {path:'first-component', component: FirstComponent},
  {path:'second-component', component: SecondComponent},
  // PODEMOS REDIRECIONAR A RENDERIZAÇÃO DO NOSSO COMPONENT
  // DE UMA ROTA UTILIZADA, PARA UMA ROTA EXISTENTE.
  // E USAMOS O patchMatch PARA DEFINIR A PARTE A ROTA UTILIZADA
  // QUE DEVE SER CONSIDERADA PARA O REDIRECIONAMENTO. 
  // full ou prefix (full para a rota completa e prefix para uma parte da rota)
  {path:'', redirectTo:'/first-component', pathMatch: 'full'},
  // EXEMPLO DE UMA ROTA WILDCARD QUE RENDERIZA UM COMPONENT
  // QUANDO UMA ROTA INEXISTENTE É USADA.
  // UMA ROTA WILDCARD SEMPRE PRECISA SER DECLARADA PRO ULTIMO,
  // POIS A PRINCIPIO ELA SERÁ UM MATCH PARA QUALQUER ROTA USADA
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //<= APLICA ARRAY DE ROTAS NO ROUTERMODULE
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ORDEM DAS ROTAS
// A ORDEM DAS ROTAS É IMPORTANTE, POIS O MODULO ROUTER DO ANGULAR SEMPRE VAI ESCOLHER A PRIMEIRA
// ROTA CORRESPONDENTE CHAMADA. POR ISSO, ROTAS MAIS ESPECIFICAS DEVEM SER LISTADAS PRIMEIRO,
// SEGUIDO DE ROTAS MENOS ESPECIFICAS. 
// LISTAR PRIMEIRO ROTAS COM PATH ESTATICO PRIMEIRO, SEGUIDO DE ROTAS COM PATH VAZIOS
// CORRESPONDEM A ROTA PADRÃO. E POR ÚLTIMO AS ROTAS WILDCARD POIS ELAS PRECISAM SER ELIMIDADAS NAS TENTATIVAS DE MATCH
// DAS ROTAS ANTERIORES.