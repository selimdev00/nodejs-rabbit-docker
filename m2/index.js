const amqp = require("amqplib");

const queue = "message";

const consume = async () => {
  try {
    const connection = await amqp.connect("amqp://rabbitmq");
    const channel = await connection.createChannel();

    process.once("SIGINT", async () => {
      await channel.close();
      await connection.close();
    });

    await channel.assertQueue(queue, { durable: false });
    await channel.consume(
      queue,
      (data) => {
        if (data) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(data.content.toString())
          );
        }
      },
      { noAck: true }
    );

    console.log(" [*] Waiting for messages. To exit press CTRL+C");
  } catch (err) {
    console.error(err);
  }
};

consume();
