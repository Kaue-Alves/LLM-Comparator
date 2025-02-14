import { Mistral } from '@mistralai/mistralai';
import dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.API_KEY_MISTRAL;

const client = new Mistral({apiKey: apiKey});

export async function mistral(askPrompt) {
    console.log("Chamou a função mistral");

    const prompt = askPrompt.toString();

    const result = await client.chat.complete({
        model: 'mistral-large-latest',
        messages: [{role: 'user', content: prompt}],
    });

    return result.choices[0].message.content;
}

// const chatResponse = await client.chat.complete({
//   model: 'mistral-large-latest',
//   messages: [{role: 'user', content: 'Qual o maior estádio de futebol do mundo?'}],
// });

// console.log('Chat:', chatResponse.choices[0].message.content);