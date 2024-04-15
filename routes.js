// route.js - Add endpoints to the API

// import data for the API
import { data, functions } from "./data.js";
// console.log(data.pets);

const routes = async (server, options) => {
  server.get("/api", async function (request, reply) {
    reply.send({ message: "hello" });
  });
  server.get("/api/common", async function (request, reply) {
    reply.send({ password: randomFromArray(data.common) });
  });
  server.get("/api/custom", async function (request, reply) {
    let arr = request.query.params.split(",");
    reply.send({ password: returnPassword(arr) });
  });

  // also accepts post requests
  // fastify.post("/api/custom", async function (request, reply) {
  //   console.log(request.body);
  //   reply.send({ password: returnPassword(request.body) });
  // });
};
export default routes;

function returnPassword(arr) {
  console.log(arr);
  let shuffle = [];
  let str = "";
  if (arr.includes("common")) {
    str = randomFromArray(data.common);
  } else {
    if (arr.includes("endearments")) {
      shuffle.push(randomFromArray(data.endearments));
    }
    if (arr.includes("pets")) {
      shuffle.push(randomFromArray(data.pets));
    }
    if (arr.includes("patterns")) {
      shuffle.push(randomFromArray(data.patterns));
    }
    if (arr.includes("colors")) {
      shuffle.push(randomFromArray(data.colors));
    }
    if (arr.includes("cities")) {
      shuffle.push(randomFromArray(data.cities));
    }
    if (arr.includes("dates")) {
      shuffle.push(functions.randomYear());
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
