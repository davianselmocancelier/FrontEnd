import { EstadosModule } from './estados/estados.module';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { HttpClientModule } from '@angular/common/http';

import { CategoriasModule } from './categorias/categorias.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';

import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import {ToastModule} from 'primeng/toast';

import { MessageService, ConfirmationService } from 'primeng/api';
import {Routes, RouterModule} from '@angular/router';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';



const rotas: Routes = [
  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent},
  {path: 'estados', component: EstadosPesquisaComponent},
  {path: 'estados/novo', component: EstadosCadastroComponent},
  {path: 'estados/:id', component: EstadosCadastroComponent}
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    EstadosModule,
    HttpClientModule,
    ToastModule,
    RouterModule.forRoot(rotas)

  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
