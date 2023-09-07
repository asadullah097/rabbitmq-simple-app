const amqp = require('amqplib');
async function queueConnection() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const queue = "hello";
    return { channel, queue };
  } catch (error) {
    console.log(error);
  }
}
module.exports = { queueConnection };
