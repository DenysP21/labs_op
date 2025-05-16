const eventBus = require("./eventBus");

class Sensor {
  constructor(name) {
    this.name = name;
  }

  sendData(data) {
    console.log(`[Sensor ${this.name}] Sending:`, data);
    eventBus.emit("sensorData", { sensor: this.name, ...data });
  }
}

module.exports = Sensor;
