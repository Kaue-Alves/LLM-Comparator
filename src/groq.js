import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY_GROQ;
const groq = new Groq({ apiKey: apiKey });

export async function groqChat(askPrompt) {
    console.log("Chamou a função groqChat");

    const prompt = askPrompt.toString();

    const result = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
    });

    return result.choices[0]?.message?.content;
}

// Exemplo de uso
(async () => {
    const resposta = await groqChat("Quem foi pelé em uma palavra?");
    console.log(`Resposta do Groq: \n\n${resposta}\n\n`);
})();
