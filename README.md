# LLM Comparator

Este projeto compara diferentes Modelos de Linguagem de Grande Escala (LLMs), incluindo **Google Gemini, Groq Llama3, Mistral e Groq Gemma2**. Ele permite que o usuário faça uma pergunta e receba respostas de cada modelo, que posteriormente são avaliadas e classificadas.

## 🚀 Funcionalidades

- Envia uma mesma pergunta para diferentes LLMs.
- Exibe as respostas de cada modelo.
- Realiza uma autoavaliação comparativa das respostas utilizando um dos LLMs.
- Retorna um ranking final baseado nas autoavaliações.
- Permite realizar várias comparações seguidas.

## 📂 Estrutura do Projeto

```
LLM-COMPARATOR/
│── node_modules/
│── src/
│   ├── gemini.js         # Integração com Google Gemini
│   ├── groqGemma2.js     # Integração com Groq Gemma2
│   ├── groqLlama.js      # Integração com Groq Llama3
│   ├── mistral.js        # Integração com Mistral
│   ├── input.js          # Captura input do usuário
│── .env                 # Armazena chaves da API
│── .gitignore           # Arquivos a serem ignorados pelo Git
│── main.js              # Arquivo principal que executa a lógica do programa
│── package.json         # Dependências do projeto
│── package-lock.json    # Versões exatas das dependências
│── README.md            # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Google Gemini API**: Modelo de IA da Google.
- **Groq API (Llama3 e Gemma2)**: Modelos de IA hospedados pela Groq.
- **Mistral AI API**: Modelo de IA da Mistral.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **readline**: Captura de entrada do usuário no terminal.

## 🔧 Instalação e Configuração

1. Clone este repositório:

   ```bash
   git clone https://github.com/Kaue-Alves/LLM-Comparator.git
   cd LLM-Comparator
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as chaves da API: Crie um arquivo `.env` na raiz do projeto e adicione suas chaves de API:

   ```ini
   API_KEY_GEMINI=SUA_CHAVE_AQUI
   API_KEY_MISTRAL=SUA_CHAVE_AQUI
   API_KEY_GROQ=SUA_CHAVE_AQUI
   ```

## ▶️ Como Usar

Execute o projeto com o seguinte comando:

```bash
npm run dev
```

O terminal solicitará que você insira uma pergunta. Depois de alguns segundos, você receberá as respostas de cada modelo e uma comparação baseada nos critérios:

- Clareza e coerência
- Precisão da informação
- Criatividade ou profundidade
- Consistência gramatical

Um ranking final será gerado automaticamente.

## 📝 Exemplo de Uso

```bash
Bem-vindo ao Chatbot de Comparação de Modelos de Linguagem!
Faça uma pergunta para iniciar: Qual é a capital da França?

Conectando à API do Gemini...
Conectando à API do Mistral...
Conectando à API do Groq com modelo Llama3...

Resposta do Gemini:
"A capital da França é Paris."
...
```

## 🏆 Ranking Automático

Após obter as respostas, o sistema irá gerar uma autoavaliação e classificar as respostas automaticamente.

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias!

1. Faça um fork do projeto.
2. Crie uma branch com sua funcionalidade (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para o repositório (`git push origin minha-feature`).
5. Abra um Pull Request.

---

Desenvolvido por [Kauê Alves S.](https://github.com/Kaue-Alves).

