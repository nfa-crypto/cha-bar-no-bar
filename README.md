# Chá Bar no Bar — site de presentes

Site com a lista de presentes do seu chá, no visual do convite. Cada convidado
pode marcar o que vai dar, e o presente some da lista de disponíveis pra ninguém
repetir (o "servidor" garante isso, não é só no computador de quem acessa).

## O que tem em cada arquivo

- `index.html` — a página em si (textos, data, local).
- `styles.css` — visual (cores neon, fontes, layout).
- `gifts-data.js` — **a lista de presentes**. É o único arquivo que você precisa editar no dia a dia.
- `app.js` — a lógica de marcar/desmarcar presente (não precisa mexer).
- `netlify/functions/gifts.js` — o "servidor" que guarda quem marcou o quê (não precisa mexer).
- `netlify.toml` e `package.json` — configuração técnica pro Netlify entender o site (não precisa mexer).
- `test-logic.mjs` e `debug-test.mjs` — scripts usados só para testar a regra
  "sem presente duplicado" antes de publicar. Não fazem parte do site (pode
  deixar, apagar, ou não subir pro GitHub — não faz diferença).

## Como publicar (gratuito, ~10 minutos, só uma vez)

Vamos usar GitHub (guarda os arquivos) + Netlify (publica o site). Os dois são gratuitos.

### 1. Crie uma conta no GitHub (se não tiver)
Acesse **github.com** → "Sign up" → crie sua conta gratuita.

### 2. Crie um repositório novo
- No GitHub, clique em **"New repository"**.
- Dê um nome, por exemplo `cha-bar-no-bar`.
- Deixe como **Public** ou **Private** (tanto faz).
- Clique em **"Create repository"**.

### 3. Suba os arquivos
- Na página do repositório recém-criado, clique em **"uploading an existing file"** (ou "Add file" → "Upload files").
- Arraste TODOS os arquivos e pastas desta entrega (incluindo a pasta `netlify` inteira) pra essa tela.
- Clique em **"Commit changes"**.

### 4. Crie uma conta no Netlify e conecte o repositório
- Acesse **netlify.com** → "Sign up" (pode entrar direto com sua conta do GitHub).
- Clique em **"Add new site" → "Import an existing project"**.
- Escolha **GitHub** e selecione o repositório `cha-bar-no-bar`.
- Não precisa mudar nenhuma configuração de build — clique em **"Deploy"**.
- Em cerca de 1 minuto o Netlify te dá um link público (algo como `https://nome-aleatorio.netlify.app`). Esse é o link que você manda pros convidados!

*(Dica: em "Site settings → Change site name" dá pra trocar esse link aleatório por um nome tipo `cha-bar-no-bar.netlify.app`.)*

Não precisa criar nenhuma conta de banco de dados separada — o armazenamento de
"quem marcou o quê" (Netlify Blobs) já vem junto do Netlify, de graça.

## Como colocar os links reais dos presentes

Abra o arquivo `gifts-data.js` (no GitHub mesmo: clique no arquivo → ícone de lápis
"Edit" → edita direto no navegador → "Commit changes"). O Netlify republica o
site sozinho, automaticamente, uns 30 segundos depois de cada alteração.

Cada presente é um bloco assim:

```js
{
  id: "cozinha-jogo-panelas",
  categoria: "Cozinha",
  nome: "Jogo de panelas antiaderente",
  link: "https://www.lojaexemplo.com.br/produto",
  imagem: ""
},
```

- **Pra trocar um exemplo por um link real**: só editar `nome` e `link` daquele bloco.
- **Pra adicionar um presente novo**: copie um bloco inteiro, cole antes do `];`
  no final do arquivo, e troque os valores (dê um `id` novo e único).
- **Pra remover um presente**: apague o bloco inteiro dele.
- **Não repita `id`** entre presentes, e não troque o `id` de um presente depois
  que alguém já marcou ele (senão a marcação "perde a referência").
- `imagem` é opcional — pode deixar `""` (vazio) ou colar o link de uma foto do produto.

## Como funciona a regra de "sem duplicado"

Quando alguém marca um presente, o site avisa o servidor (Netlify Function).
O servidor confere se aquele presente já está marcado — se estiver, recusa e
mostra a mensagem "esse presente já foi marcado por outra pessoa" pra quem
tentou marcar depois. Só quem marcar primeiro consegue.

Se alguém marcar errado, tem um link "não fui eu / desmarcar" embaixo do nome,
que libera o presente de novo pra qualquer convidado marcar.

## Testando antes de mandar o link pros convidados

Depois de publicado, abra o link em duas abas (ou peça pra outra pessoa testar
ao mesmo tempo) e tente marcar o mesmo presente nas duas — só uma deve
conseguir. Isso confirma que a regra de duplicidade está funcionando.
