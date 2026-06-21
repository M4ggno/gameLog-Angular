import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  private http = inject(HttpClient);

  private apiKey = 'COLAR_API_KEY';

  buscarJogos(nome: string) {
    return this.http.get(
      `https://api.rawg.io/api/games?key=${this.apiKey}&search=${nome}`
    );
  }
}
