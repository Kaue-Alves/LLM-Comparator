import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function gemini(askPrompt) {

    const prompt = askPrompt.toString();

    const result = await model.generateContent(prompt);
    return result.response.text();
}
