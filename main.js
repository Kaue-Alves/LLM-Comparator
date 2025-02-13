// Google Gemini - Em progresso
// Anthropic Claude
// ○ Mistral AI
// ○ DeepSeek AI
// Llama3 - Em progresso

import { gemini } from "./src/gemini.js";
import { getUserInput } from "./src/input.js";
import dotenv from "dotenv";
dotenv.config();


async function avaliar(respostaDoGemini) {
    let avaliacaoDoGemini = await gemini(`"Analise e classifique as respostas fornecidas com base nos seguintes critérios:

Clareza e coerência (1-10)
Precisão da informação (1-10)
Criatividade ou profundidade (1-10)
Consistência gramatical (1-10)
Retorne um ranking das respostas com a melhor em primeiro lugar. Use apenas notas e um breve comentário (máx. 2 frases) justificando a melhor resposta."

Gemini: ${respostaDoGemini}`)
        
    return avaliacaoDoGemini;
}


let userInput = await getUserInput("Digite algo para o Gemini: ");
let respostaDoGemini = await gemini(userInput);

let autoAvaliacaoGemini = await avaliar(respostaDoGemini); 


console.log(`Resposta do Gemini: \n\n${respostaDoGemini}\n\n`);
// console.log(`Resposta do Llama3: \n\n${respostaDoGemini}\n\n`);

console.log();

console.log(`Auto-avaliação do Gemini: \n\n${autoAvaliacaoGemini}\n\n`);






