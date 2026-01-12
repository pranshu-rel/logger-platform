const { Kafka } = require("kafkajs");
const config = require("../config");

const kafka = new Kafka({
  clientId: "logger-service",
  brokers: [config.KAFKA_BROKER]
});

const producer = kafka.producer({
  allowAutoTopicCreation: true
});

let connected = false;

async function connectProducer() {
  if (!connected) {
    await producer.connect();
    connected = true;
    console.log("Kafka producer connected");
  }
}

async function publishToKafka(message) {
  await connectProducer();

  await producer.send({
    topic: config.KAFKA_LOG_TOPIC,
    messages: [
      {
        value: message // STRING ONLY
      }
    ]
  });
}

module.exports = { publishToKafka };
