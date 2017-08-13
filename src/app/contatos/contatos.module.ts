import { NgModule } from '@angular/core';
import { ContatosListaComponent } from './contatos-lista.component';

// Decorando a classe
@NgModule({ // Metadados
  declarations: [
    ContatosListaComponent
  ],

  // Exporta os componentes para que outros módulos que importem o nosso contatosModules
  // consigam chamar os componentes aqui declarados
  exports: [
    ContatosListaComponent
  ]
})
export class ContatosModule {

}
