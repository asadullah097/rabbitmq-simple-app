const { receivedMessage } = require("./receive");
const { sendMessage } = require("./send");

async function main() {
  try {
    await sendMessage();
    await receivedMessage();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
