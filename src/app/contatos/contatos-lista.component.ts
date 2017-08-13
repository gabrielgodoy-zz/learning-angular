import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.scss'],
})
export class ContatosListaComponent implements OnInit {
  contatos: Contato[];

  constructor(private contatoService: ContatoService) { // Injetando o serviço no componente
  }

  ngOnInit(): void { // Gancho do ciclo de vida do componente
    this.contatoService.getContatosSlowly().then((contatos: Contato[]) => {
      this.contatos = contatos;
    }).catch(error => console.log('Erro: ', error));
  }
}
