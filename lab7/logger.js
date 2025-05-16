const eventBus = require("./eventBus");

class Logger {
  constructor() {
    this.listener = this.logData.bind(this);
    eventBus.on("sensorData", this.listener);
  }

  logData(data) {
    console.log(`[Logger] Data from ${data.sensor}:`, data);
  }

  unsubscribe() {
    eventBus.off("sensorData", this.listener);
    console.log("[Logger] Unsubscribed");
  }
}

module.exports = Logger;
