import { Injectable } from '@angular/core';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

// Declarar a classe com injectable para emitir metadados para que o Angular possa identificar as dependências
// desse serviço e fazer a injeção das dependências que esse serviço precisa de forma correta
@Injectable()
export class ContatoService {
  getContatos(): Promise<Contato[]> {
    return Promise.resolve(CONTATOS);   // Simulando uma chamada ao servidor
  }

  getContatosSlowly(): Promise<Contato[]> {   // Simulando uma chamada ao servidor com delay de 2 segundos
    const timeForServerToRespond = 1000;
    return new Promise((resolve, reject) => {
      setTimeout(resolve, timeForServerToRespond);   // Forçando somente um resolve para cair pro próximo then()
    }).then(() => this.getContatos());
  }

  getContato(id: number): Promise<Contato> {
    return this.getContatos().then((contatos: Contato[]) => {
      return contatos.find((contato: Contato) => contato.id === id);
    });
  }
}
