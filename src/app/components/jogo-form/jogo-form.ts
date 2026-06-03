import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Jogo } from '../../models/jogo';
import { RawgService } from '../../services/rawg';

@Component({
  selector: 'app-jogo-form',
  imports: [FormsModule],
  templateUrl: './jogo-form.html',
  styleUrl: './jogo-form.css'
})
export class JogoForm {

  private rawgService = inject(RawgService);

  nome = '';
  sugestoes: any[] = [];
  plataforma = 'PC';
  imagem = '';
  rawgId = '';

  adicionar = output<Jogo>();

  adicionarJogo() {

    if (!this.nome.trim()) {
      return;
    }

    const jogo: Jogo = {
      nome: this.nome,
      plataforma: this.plataforma,
      zerado: false,
      rawgId: this.rawgId,
      imagem: this.imagem
    };

    this.adicionar.emit(jogo);

    this.nome = '';
    this.plataforma = 'PC';
    this.imagem = '';
    this.rawgId = '';
  }

  buscarSugestoes() {

  if (this.nome.length < 3) {
    this.sugestoes = [];
    return;
  }

  this.rawgService
    .buscarJogos(this.nome)
    .subscribe((res: any) => {

      this.sugestoes = res.results.slice(0, 5);

    });

  }

  selecionarJogo(jogo: any) {

  this.nome = jogo.name;

  this.rawgId = jogo.id;

  this.imagem = jogo.background_image;

  this.sugestoes = [];

}

}
