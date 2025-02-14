import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY_GROQ;
const groqClient = new Groq({ apiKey: apiKey });

export async function groqGemma2(askPrompt) {
    console.log("Chamou a função groqChat Gemma2");

    const prompt = askPrompt.toString();

    const result = await groqClient.chat.completions.create({
        model: "gemma2-9b-it",
        messages: [{ role: "user", content: prompt }],
    });

    return result.choices[0]?.message?.content;
}