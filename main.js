// Google Gemini - Feito
// Anthropic Claude
// Mistral AI - 
// DeepSeek AI
// Llama3 - Em progresso

import { gemini } from "./src/gemini.js";
import { mistral } from "./src/mistral.js";

import { getUserInput } from "./src/input.js";
import dotenv from "dotenv";
dotenv.config();

async function avaliar(respostaDoGemini, respostaDoMistral) {
    const promptInicial = `"Analise e classifique as respostas fornecidas com base nos seguintes critérios:

Clareza e coerência (1-10)
Precisão da informação (1-10)
Criatividade ou profundidade (1-10)
Consistência gramatical (1-10)
Retorne um ranking das respostas com a melhor em primeiro lugar. Use apenas notas e um breve comentário (máx. 2 frases) justificando a melhor resposta."

Gemini: ${respostaDoGemini}
Mistral: ${respostaDoMistral}
`

    let avaliacaoDoGemini = await gemini(promptInicial)
    let avaliacaoDoMistral = await mistral(promptInicial)        
    return {avaliacaoDoGemini, avaliacaoDoMistral};
}

let userInput = await getUserInput("Faça uma pergunta: ");

let respostaDoGemini = await gemini(userInput);
let respostaDoMistral = await mistral(userInput);

let autoAvaliacoes = await avaliar(respostaDoGemini, respostaDoMistral); 


console.log(`Resposta do Gemini: \n\n${respostaDoGemini}\n\n`);
console.log(`Resposta do Mistral: \n\n${respostaDoMistral}\n\n`);
// console.log(`Resposta do Llama3: \n\n${respostaDoGemini}\n\n`);


console.log(`Auto-avaliação do Gemini: \n\n${autoAvaliacoes.avaliacaoDoGemini}\n\n`);
console.log(`Auto-avaliação do Mistral: \n\n${autoAvaliacoes.avaliacaoDoMistral}\n\n`);






