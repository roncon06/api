## AVALIAÇÃO DESAFIO PROFISSIONAL

### Trabalho realizado por:

- Lucas Roncon Goncalves - RA: 22014352-2
- Vitoria Mendes - RA: 22137969-2
- Anna Julia - RA: 22045748-2


## Pré-Requisitos
- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TMDB](https://developer.themoviedb.org/docs/getting-started) - Gerar chave API

## Iniciando o projeto

```bash
$  git clone https://github.com/roncon06/api.git
```  

## Configurando a aplicação:
1. Fazer uma cópia do `.env.example` para `.env`, e preencher a informação da conexão com banco de dados.
2. insira a env **APIKEY**
3. Instale as dependências: 
```bash 
npm install
```
3. Inicialize o container Docker:
```bash
docker-compose up -d
```
## Inicializando a aplicação:

Inicializando normalmente: 
```bash
npm run start
```

## Rodando os testes
Rodando testes: 
```bash
npm run test:e2e
```
Rodando teste de carga:
```bash
npm run test:autocannon
```

## Documentação/Endpoints 📰

Foi disponibilizado os arquivos de environment e collection da ferramenta [insomnia]contendo todos os endpoints feitos neste projeto.


Também contamos com uma documentação feita pelo [swagger](https://swagger.io/) que está disponibilizada na seguinte rota da API:  

http://localhost:3000/api




### Movie

**GET /movies/popular**: Retorna os filmes mais populares
**GET /movies/:name**: Retorna um filme pelo nome.
**POST /movies**: Cria um novo filme.  
**GET /movieS**: Retorna todos os filmes.
**GET /movies/id**: Retorna um filme específico pelo ID.  
**PATCH /movieS/:id**: Atualiza um filme pelo ID.  
**DELETE /movieS/:id**: Remove um filme pelo ID.

---
-

### User

**POST /users**: Cria um novo usuário.
**POST /auth/login**: Autentica o usuário.  
**GET /users/:username**: Retorna um usuário específico pelo username.  
**PUT /users/:username**: Atualiza um usuário pelo username.  
**DELETE /users/:username**: Remove um usuário pelo usarname.

---




