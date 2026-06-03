import { Component, input, output } from '@angular/core';
import { Jogo } from '../../models/jogo';

@Component({
  selector: 'app-jogo-card',
  imports: [],
  templateUrl: './jogo-card.html',
  styleUrl: './jogo-card.css'
})
export class JogoCard {

  jogo = input.required<Jogo>();

  remover = output<string>();

  removerJogo() {
    this.remover.emit(this.jogo().id!);
  }

  alterarStatus = output<Jogo>();

alterarZerado() {

  const jogoAtualizado: Jogo = {
    ...this.jogo(),
    zerado: !this.jogo().zerado
  };

  this.alterarStatus.emit(jogoAtualizado);
}

}
