const { queueConnection } = require("./connect");
async function receivedMessage() {
  try {
    const { channel, queue } = await queueConnection();
    await channel.assertQueue(queue, {
      durable: false,
    });
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(
      queue,
      function (msg) {
        console.log(" [x] Received %s", msg.content.toString());
      },
      {
        noAck: true,
      }
    );
  } catch (error) {
    throw error;
  }
}

module.exports = { receivedMessage };
