# 🪙 Comparador Crypt

**Comparador Crypt** é uma aplicação web desenvolvida com **React + Vite** que permite comparar os preços de duas criptomoedas em tempo real, utilizando a API pública da [CoinGecko](https://www.coingecko.com/). É uma ferramenta simples, intuitiva e útil para entusiastas e investidores acompanharem rapidamente cotações e histórico de comparação.

---

## 🚀 Funcionalidades

- 🔍 **Busca inteligente de criptomoedas** com sugestão automática
- 💱 **Comparação de preços** entre duas moedas com cotação em dólar (USD)
- 📊 **Histórico das últimas comparações** (armazenado localmente no navegador)
- ⚡ Interface rápida e responsiva com React + Vite
- 🧠 Código modular e componentes reutilizáveis

---

## 🖥️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CoinGecko API](https://www.coingecko.com/en/api)
- CSS (customizado)
- ESLint (com regras para hooks)

---

## 📸 Preview

<img src="https://raw.githubusercontent.com/Douglasl10/comparador-crypt/refs/heads/main/src/assets/capa.png">

---

## 🛠️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Douglasl10/comparador-crypt.git
cd comparador-crypt
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 4. Acesse no navegador

```
http://localhost:5173
```

---

## 🧪 Teste rápido

Pesquise por criptos como `bitcoin`, `ethereum`, `solana` e selecione duas delas. O aplicativo exibirá os preços atuais e salvará a comparação no histórico (armazenado localmente no `localStorage`).

---

## ⚠️ Observações

- A CoinGecko possui limite de requisições por minuto (sem autenticação). Evite múltiplas buscas seguidas para não gerar erro `429 Too Many Requests`.
- Os dados de histórico são armazenados no `localStorage` e limitados às 5 últimas comparações.
- Projeto ideal para estudos de React com hooks, consumo de API externa e manipulação de estado local.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

