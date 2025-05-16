const fs = require("fs");
const readline = require("readline");

function askUserForNumber() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Введіть число для пошуку: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function processFile(filePath, searchNumber) {
  const stream = fs.createReadStream(filePath, { encoding: "utf-8" });

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let count = 0;

  for await (const line of rl) {
    if (line.includes(searchNumber)) {
      console.log(`Знайдено рядок з числом: ${line}`);
    }

    if (line.includes("рядок номер 999999")) {
      console.log("Знайдено останній рядок!");
    }

    count++;
    if (count % 10000 === 0) {
      console.log(`Оброблено ${count} рядків`);
    }
  }

  console.log(`Оброблено: ${count} рядків. End`);
}

async function number() {
  const searchNumber = await askUserForNumber();
  await processFile("bigfile.txt", searchNumber);
}

number();
