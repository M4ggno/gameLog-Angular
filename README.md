<p align="center">
  <img src="/public/logo.png" width="200"/>
</p>

## gameLog - Angular

O **gameLog** é uma aplicação desenvolvida em Angular para gerenciamento de jogos.  
Com ela, você pode cadastrar seus jogos, acompanhar quais já foram zerados e organizar sua lista de forma simples e visual.

O projeto utiliza **JSON Server** como backend simulado para fornecer uma API REST local.

---

## O que o projeto faz

- 📌 Cadastro de jogos
- 📝 Edição e remoção de jogos
- 🎯 Marcação de jogos como **zerado / não zerado**
- 🖼️ Suporte a imagem de capa dos jogos
- 📋 Listagem dinâmica de jogos
- ⚡ Interface simples, responsiva e organizada

---

## Versões utilizadas no projeto

### Stack principal

- Angular CLI: 21.2.13
- Angular: 21.2.15
- Node.js: 25.8.1
- npm: 11.11.0
- TypeScript: 5.9.3
- RxJS: 7.8.2
- JSON Server: 11.11.0
- Vitest: 4.1.8
- Sistema operacional: Windows 64-bit

---

### Observação importante sobre o Node.js

O Angular não suporta oficialmente a versão Node.js 25.x utilizada neste projeto.

Apesar disso, o projeto funciona normalmente no ambiente atual.  
Para maior estabilidade, recomenda-se utilizar versões LTS do Node.js (como Node 20 LTS).

---

## Backend (JSON Server)

O projeto usa o **JSON Server** para simular uma API REST real.

Ele permite:

- GET (listar jogos)
- POST (criar jogos)
- PUT (editar jogos)
- DELETE (remover jogos)

Os dados ficam armazenados no arquivo:

db.json

---

## Como rodar o projeto

### 1. Clonar o repositório

git clone https://github.com/M4ggno/gameLog-Angular.git

### 2. Acessar a pasta

cd gameLog-Angular

### 3. Instalar dependências

npm install

### 4. Rodar o backend (JSON Server)

Em um terminal separado:

json-server --watch db.json

API disponível em:
http://localhost:3000

### 5. Rodar o Angular

Em outro terminal:

ng serve

Acesse:
http://localhost:4200

---

## Estrutura do projeto

src/
 ├── app/
 │   ├── components/
 │   ├── services/
 │   ├── models/
 │   ├── pages/
 │   └── app.module.ts
 ├── assets/
 └── styles/

---

## Exemplo de modelo de jogo

export interface Jogo {
  id: number;
  nome: string;
  plataforma: string;
  imagem?: string;
  zerado: boolean;
}

---

## Possíveis melhorias futuras

- Filtros por plataforma e status
- Sistema de avaliação dos jogos
- Backend real com banco de dados
- Dashboard de progresso
- Persistência em nuvem

---

##  Autor

Desenvolvido por - 
**[M4ggno](https://github.com/M4ggno)**
- **[lipeedevv](https://github.com/lipeedevv)**

---

## Licença

Este projeto está sob a licença MIT.
