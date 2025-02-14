import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY_GROQ;
const groqClient = new Groq({ apiKey: apiKey });

export async function groqLlama3(askPrompt) {

    const prompt = askPrompt.toString();

    const result = await groqClient.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
    });

    return result.choices[0]?.message?.content;
}
