import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  private http = inject(HttpClient);

  private apiKey = '701acf27959046158a57a35c41e8a9c5';

  buscarJogos(nome: string) {
    return this.http.get(
      `https://api.rawg.io/api/games?key=${this.apiKey}&search=${nome}`
    );
  }
}
