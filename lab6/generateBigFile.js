const fs = require("fs");

const stream = fs.createWriteStream("bigfile.txt");
for (let i = 0; i < 1_000_000; i++) {
  stream.write(`Це рядок номер ${i}\n`);
}
stream.end(() => console.log("Файл створено"));
