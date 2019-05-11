import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';
import { EstadosPesquisaComponent } from './estados-pesquisa/estados-pesquisa.component';

@NgModule({
  declarations: [EstadosCadastroComponent, EstadosPesquisaComponent],
  imports: [
    CommonModule
  ]
})
export class EstadosModule { }
