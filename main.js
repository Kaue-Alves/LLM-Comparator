// Google Gemini - Feito
// Anthropic Claude
// Mistral AI -
// DeepSeek AI
// Llama3 - Em progresso

import { gemini } from "./src/gemini.js";
import { mistral } from "./src/mistral.js";
import { groqLlama3 } from "./src/groqLlama.js";

import { getUserInput } from "./src/input.js";
import dotenv from "dotenv";
import { groqGemma2 } from "./src/groqGemma2.js";

dotenv.config();

async function avaliar(respostaDoGemini, respostaDoMistral, respostaDoLlama3) {
    const prompt = `"Analise e classifique as respostas fornecidas com base nos seguintes critérios:

Clareza e coerência (1-10)
Precisão da informação (1-10)
Criatividade ou profundidade (1-10)
Consistência gramatical (1-10)

Retorne um ranking das respostas com a melhor em primeiro lugar utilizando o formato acima. Use apenas notas e um breve comentário (máx. 2 frases) justificando a melhor resposta. (Atenção, não utilize formatadores de texto, como por exemplo negrito, itálico, etc.)"

Gemini: ${respostaDoGemini}
Mistral: ${respostaDoMistral}
Llama3: ${respostaDoLlama3}
`;

    let avaliacaoDoGemini = await gemini(prompt);
    let avaliacaoDoMistral = await mistral(prompt);
    let avaliacaoDoLlama3 = await groqLlama3(prompt);

    return { avaliacaoDoGemini, avaliacaoDoMistral, avaliacaoDoLlama3 };
}

async function vencedor(autoAvaliacoes) {
    const prompt = `Utilizando a linguagem pt-br responda, com as avaliações em mãos, qual dos modelos de linguagem teve a melhor nota? Gemini, Mistral ou Llama3? 
    
    Gemini: ${autoAvaliacoes.avaliacaoDoGemini}
    Mistral: ${autoAvaliacoes.avaliacaoDoMistral}
    Llama3: ${autoAvaliacoes.avaliacaoDoLlama3}

    Faça um mini ranking final. (Atenção, não utilize formatadores de texto, como por exemplo negrito, itálico, etc.)
    `;

    return `Vencedor: ${await groqGemma2(prompt)}`;
}

async function main() {
    try {
        console.log(
            "Bem-vindo ao Chatbot de Comparação de Modelos de Linguagem! \n"
        );

        let userInput = await getUserInput("Faça uma pergunta para iniciar: ");
        console.log(
            `Aguarde um momento enquanto os modelos de linguagem respondem a pergunta.\n\n`
        );

        console.log(`Conectando a api do Gemini...`);
        let respostaDoGemini = await gemini(userInput);

        console.log(`Conectando a api do Mistral...`);
        let respostaDoMistral = await mistral(userInput);

        console.log(`Conectando a api do Groq com modelo Llama3...`);
        let respostaDoLlama3 = await groqLlama3(userInput);

        console.log(`\n\nResposta do Gemini: \n\n${respostaDoGemini}\n\n`);
        console.log(`-----------------`);
        console.log(`\n\nResposta do Mistral: \n\n${respostaDoMistral}\n\n`);
        console.log(`-----------------`);
        console.log(
            `\n\nResposta do Groq com modelo Llama3: \n\n${respostaDoLlama3}\n\n`
        );
        console.log(`-----------------`);

        console.log(
            `\n\nGerando auto-avaliações dos modelos de linguagem... (Essa operação leva alguns segundos)\n\n`
        );

        let autoAvaliacoes = await avaliar(
            respostaDoGemini,
            respostaDoMistral,
            respostaDoLlama3
        );

        console.log(
            `Auto-avaliação do Gemini: \n\n${autoAvaliacoes.avaliacaoDoGemini}\n\n`
        );
        console.log(`-----------------`);
        console.log(
            `\n\nAuto-avaliação do Mistral: \n\n${autoAvaliacoes.avaliacaoDoMistral}\n\n`
        );
        console.log(`-----------------`);
        console.log(
            `\n\nAuto-avaliação do Llama3: \n\n${autoAvaliacoes.avaliacaoDoLlama3}\n\n`
        );
        console.log(`-----------------`);

        console.log(
            `\n\nConectando a api do Groq com modelo Gemma2 para determinar o vencedor...`
        );

        console.log(
            `\n\nRanking final com o vencedor feito pelo Groq com o modelo Gemma2:\n\n${await vencedor(
                autoAvaliacoes
            )}`
        );

        let op = await getUserInput(
            "\n\nDeseja fazer outra comparação? Digite 1 para sim e 0 para não: "
        );
        return parseInt(op, 10);
    } catch (error) {
        console.error("Ocorreu um erro:", error);
        return 0;
    }
}

let op = 1;

while (op != 0 && isNaN(op) != true) {
    op = await main();
}

console.log("\nObrigado por usar o Chatbot de Comparação de Modelos de Linguagem!");
