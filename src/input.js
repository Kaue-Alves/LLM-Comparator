import readline from 'readline';

export function getUserInput(question) {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
  
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }