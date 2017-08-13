import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContatosModule } from './contatos/contatos.module';
import { AppRoutingModule } from './app-routing.module';

import { MainHeaderComponent } from './main-header/main-header.component';
import { AppComponent } from './app.component';

// Decorando a classe, para definir como o Angular vai tratar essa classe
@NgModule({  // Dentro do decorator um objeto com os metadados são passados
  imports: [  // Define os módulos necessários para aplicação
    AppRoutingModule,  // Configurações de roteamento
    BrowserModule,
    ContatosModule,
  ],
  declarations: [  // Todos os componentes utilizados nesse módulo
    AppComponent,
    MainHeaderComponent,
  ],
  bootstrap: [AppComponent],  // O componente raíz que se deseja fazer a inicialização do app a partir dele
  providers: []  // Injeção de serviços, etc...
})

export class AppModule {
}
