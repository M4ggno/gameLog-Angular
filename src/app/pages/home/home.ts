import { Component, inject, signal } from '@angular/core';
import { Jogo } from '../../models/jogo';
import { JogoService } from '../../services/jogo';
import { JogoLista } from '../../components/jogo-lista/jogo-lista';
import { JogoForm } from '../../components/jogo-form/jogo-form';

@Component({
  selector: 'app-home',
  imports: [JogoLista, JogoForm],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private jogoService = inject(JogoService);

  jogos = signal<Jogo[]>([]);

  ngOnInit() {
    this.carregarJogos();
  }

  carregarJogos() {
    this.jogoService.listar().subscribe({
      next: (dados) => {
        this.jogos.set(dados);
      }
    });
  }

  removerJogo(id: string) {
    this.jogoService.remover(id).subscribe({
      next: () => {
        this.carregarJogos();
      }
    });
  }

  adicionarJogo(jogo: Jogo) {

  this.jogoService.adicionar(jogo).subscribe({
    next: () => {
      this.carregarJogos();
    }
  });

  }
  atualizarJogo(jogo: Jogo) {

  this.jogoService.atualizar(jogo).subscribe({
    next: () => {
      this.carregarJogos();
    }
  });

}
}
