const Sensor = require("./sensor");
const Logger = require("./logger");
const AlertSystem = require("./alertSystem");

const sensor = new Sensor("A");
const logger = new Logger();
const alertSystem = new AlertSystem();

// Симулюємо події
sensor.sendData({ temperature: 45, humidity: 30 });
sensor.sendData({ temperature: 55, humidity: 40 }); // викликає alert

// Відписка
logger.unsubscribe();
alertSystem.unsubscribe();

// Більше подій — слухачі не спрацюють
sensor.sendData({ temperature: 60, humidity: 35 });
