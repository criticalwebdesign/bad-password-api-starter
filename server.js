/**
 * A bad password API
 */

import Fastify from "fastify";
import cors from '@fastify/cors'
const fastify = Fastify({
  logger: true,
});
fastify.register(cors, { 
  origin: ["https://glitch.com", /localhost\:8080/, "*"]
});



fastify.get("/", function (request, reply) {
  reply.send({ message: "hello world" });
});




fastify.get("/api", async function (request, reply) {
  let r = Math.floor(Math.random()*passwords.length)
  // console.log(r);
  reply.send({ password: passwords[r] });
});

// https://en.wikipedia.org/wiki/List_of_the_most_common_passwords
let passwords = [
  "qwerty",
  "123456",
  "password",
  "111111"
]



// // import fetch from "node-fetch";
// fastify.get("/proxy/:url", async (request, reply) => {
//   console.log(request.params.url);
  
  
//   // const response = await fetch("https://api.weather.gov/");
//   // const str = await response.json();
  
//   // let str = "";
//   // let page = await fetch(request.params.url)
//   //   .then((r) => (str = r.text()))
//   //   .catch((err) => console.error(err));
//   reply.send({ url: request.params.url });
// });

// app.get("/proxy/:url", async (req, res) => {
//   if (!req.params.url) res.send("No url");
//   console.log(req.params.url);
//   let str = "";
//   // let page = await fetch(req.params.url)
//   //   .then((r) => str = r.text())
//   //   .catch((err) => console.error(err))
//   res.send(123);
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
