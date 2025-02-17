import readline from "readline";

export function getUserInput(question) {
    return new Promise((resolve, reject) => {
        try {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            rl.question(question, (answer) => {
                rl.close();
                resolve(answer);
            });
        } catch (error) {
            console.error("Erro ao obter entrada do usuário:", error);
            reject(error);
        }
    });
}
