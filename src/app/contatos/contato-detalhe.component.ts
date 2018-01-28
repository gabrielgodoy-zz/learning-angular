import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit {
  constructor(private contatoService: ContatoService,
              private route: ActivatedRoute, // Rota atual
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => { // Observable que contém os parâmetros da nossa rota
      const id: number = +params['id']; // Acessa o parâmetro id, e com o '+' converte para número
      this.contatoService.getContato(id).then((contato: Contato) => console.log('Contato', contato));
    });
  }
}
