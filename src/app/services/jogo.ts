import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/jogos';

  listar() {
    return this.http.get<Jogo[]>(this.apiUrl);
  }

  adicionar(jogo: Jogo) {
    return this.http.post<Jogo>(
      this.apiUrl,
      jogo
    );
  }

  remover(id: string) {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }

  atualizar(jogo: Jogo) {
    return this.http.put(
      `${this.apiUrl}/${jogo.id}`,
      jogo
    );
  }

}
