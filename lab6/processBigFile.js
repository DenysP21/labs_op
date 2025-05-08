const fs = require("fs");
const readline = require("readline");

async function processFile(filePath) {
  const stream = fs.createReadStream(filePath, { encoding: "utf-8" });

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let count = 0;

  for await (const line of rl) {
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

processFile("bigfile.txt");
