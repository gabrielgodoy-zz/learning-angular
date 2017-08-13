import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/contato',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) // forRoot se usa no módulo root da aplicação
  ],
  // Exporta módulos para que outros módulos que importem esse módulo consigam chamar também os módulos aqui declarados
  exports: [
    RouterModule // Exporta o router-module para usar no AppModule o componente router-outlet
  ]
})
export class AppRoutingModule {
}
