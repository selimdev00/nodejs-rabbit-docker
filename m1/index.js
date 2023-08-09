require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const morgan = require("morgan");
app.use(morgan("tiny"));

const amqp = require("amqplib");
const produce = async (queue, data) => {
  let connection;

  try {
    connection = await amqp.connect(process.env.RABBITMQ_HOST);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));

    console.log(" [x] Sent '%s'", data);

    await channel.close();
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) await connection.close();
  }
};

app.post("/message", async (req, res) => {
  const message = req.body.message;
  if (!message)
    res.status(500).send({
      msg: "Please provide message",
    });
  const data = { message };
  await produce("message", JSON.stringify(data));
  res.send(data);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
