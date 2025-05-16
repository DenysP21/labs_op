const eventBus = require("./eventBus");

class AlertSystem {
  constructor() {
    this.listener = this.checkAlert.bind(this);
    eventBus.on("sensorData", this.listener);
  }

  checkAlert(data) {
    if (data.temperature > 50) {
      console.log(`[Alert] HIGH temperature from ${data.sensor}!`);
    }
  }

  unsubscribe() {
    eventBus.off("sensorData", this.listener);
    console.log("[AlertSystem] Unsubscribed");
  }
}

module.exports = AlertSystem;
