/**
 * A bad password API
 */

import {
  common,
  endearments,
  pets,
  patterns,
  colors,
  cities,
  randomYear,
} from "./data.js";
// console.log(common, pets);

import Fastify from "fastify";
import cors from "@fastify/cors";
import * as fs from "fs";
const fastify = Fastify({ logger: true, ignoreTrailingSlash: true });
fastify.register(cors, { origin: ["https://glitch.com", "*"] });

// send a static file
fastify.get("/", function (request, reply) {
  const bufferFile = fs.readFileSync("public/index.html");
  reply.type("text/html").send(bufferFile);
});

fastify.get("/api", async function (request, reply) {
  reply.send({ message: "hello" });
});
fastify.get("/api/common", async function (request, reply) {
  reply.send({ password: randomFromArray(common) });
});
fastify.get("/api/custom", async function (request, reply) {
  let arr = request.query.params.split(",");
  reply.send({ password: returnPassword(arr) });
});

function returnPassword(arr) {
  console.log(arr);
  let shuffle = [];
  let str = "";
  if (arr.includes("common")) {
    str = randomFromArray(common);
  } else {
    if (arr.includes("endearments")) {
      shuffle.push(randomFromArray(endearments));
    }
    if (arr.includes("pets")) {
      shuffle.push(randomFromArray(pets));
    }
    if (arr.includes("patterns")) {
      shuffle.push(randomFromArray(patterns));
    }
    if (arr.includes("colors")) {
      shuffle.push(randomFromArray(colors));
    }
    if (arr.includes("cities")) {
      shuffle.push(randomFromArray(cities));
    }
    if (arr.includes("dates")) {
      shuffle.push(randomYear());
    }
    // shuffle results
    shuffle.sort(() => 0.5 - Math.random());
    str = shuffle.join("");
  }

  if (arr.includes("lowercase")) {
    str = str.toLowerCase();
  }
  return str;
}

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// accepts post requests
// fastify.post("/api/custom", async function (request, reply) {
//   console.log(request.body);
//   reply.send({ password: returnPassword(request.body) });
// });

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
