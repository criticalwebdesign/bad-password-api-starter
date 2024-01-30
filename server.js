/**
 * A bad password API
 */

import Fastify from "fastify";
import cors from "@fastify/cors";
import * as fs from "fs";
const fastify = Fastify({
  logger: true,
});
fastify.register(cors, {
  origin: ["https://glitch.com", /localhost\:8080/, "*"],
});

fastify.get("/", function (request, reply) {
  // send a static file
  const bufferIndexHtml = fs.readFileSync("public/index.html");
  reply.type("text/html").send(bufferIndexHtml);
});

fastify.get("/api", async function (request, reply) {
  let r = Math.floor(Math.random() * passwords.length);
  // console.log(r);
  reply.send({ password: passwords[r] });
});

// https://en.wikipedia.org/wiki/Wikipedia:10,000_most_common_passwords
let passwords = [
  "123456",
  "abc123",
  "qwerty",
  "password",
  "12345678",
  "111111",
  "123123",
  "qwerty123",
  "password123",
  "000000",
  "qwertyuiop",
  "dragon",
  "hello",
  "monkey",
  "soccer",
  "letmein",
];

// Run the server and report out to the logs
fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
