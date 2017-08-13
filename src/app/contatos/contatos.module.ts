import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';    // Possui diretivar comuns como ngFor e ngIf
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoService } from './contato.service';

// Decorando a classe
@NgModule({ // Metadados
  imports: [
    CommonModule,
    ContatoRoutingModule
  ],
  declarations: [
    ContatosListaComponent,
    ContatoDetalheComponent
  ],
  providers: [ // Injeção de serviço, compartilhado por todos os componentes declarados nesse módulo
    ContatoService
  ],
  // Exporta componentes para que outros módulos que importem esse módulo consigam chamar os componentes aqui declarados
  exports: [
    ContatosListaComponent
  ]
})
export class ContatosModule {
}
