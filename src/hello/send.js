const { queueConnection } = require("./../utils/connect");
async function sendMessage() {
  try {
    const { channel, queue } = await queueConnection();
    const msg = "Hello World!";

    await channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  } catch (error) {
    throw error;
  }
}

module.exports = { sendMessage };
