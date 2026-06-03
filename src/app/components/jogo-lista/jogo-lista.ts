import { Component, input, output } from '@angular/core';
import { Jogo } from '../../models/jogo';
import { JogoCard } from '../jogo-card/jogo-card';

@Component({
  selector: 'app-jogo-lista',
  imports: [JogoCard],
  templateUrl: './jogo-lista.html',
  styleUrl: './jogo-lista.css'
})
export class JogoLista {

  jogos = input.required<Jogo[]>();

  remover = output<string>();

  removerJogo(id: string) {
    this.remover.emit(id);
  }

  alterarStatus = output<Jogo>();

  alterarStatusJogo(jogo: Jogo) {
    this.alterarStatus.emit(jogo);
  }
}
