import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';

const contatoRoutes: Routes = [
  {
    path: 'contato',
    component: ContatosListaComponent
  },
  {
    path: 'contato/save',
    component: ContatoDetalheComponent
  },
  {
    path: 'contato/save/:id',   // Parâmetro dinâmico
    component: ContatoDetalheComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contatoRoutes) // forChild se usa no módulo que não é root, são rotas filhas
  ],
  exports: [
    RouterModule
  ]
})
export class ContatoRoutingModule {
}
