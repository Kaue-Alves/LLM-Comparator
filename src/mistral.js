import { Mistral } from "@mistralai/mistralai";
import dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.API_KEY_MISTRAL;

const client = new Mistral({ apiKey: apiKey });

export async function mistral(askPrompt) {
    try {
        const prompt = askPrompt.toString();
        const result = await client.chat.complete({
            model: "mistral-large-latest",
            messages: [{ role: "user", content: prompt }],
        });
        return result.choices[0].message.content;
    } catch (error) {
        console.error("Erro ao chamar a API do Mistral:", error);
        throw error;
    }
}
