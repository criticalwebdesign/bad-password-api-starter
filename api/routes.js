//////////////////////////////////////
////////////// ROUTES ////////////////
//////////////////////////////////////

// route.js - Add endpoints to the API

import express from 'express';
var router = express.Router();
// import data for the API
import { data, functions } from "./data.js";
// console.log(data.pets);


// 👉 code (from Chapter 9) ...

export default router;



function returnPassword(params) {
  let str = "";
  // group 1
  if (params.includes("endearments")) {
    str += randomFromArray(data.endearments);
  }
  if (params.includes("pets")) {
    str += randomFromArray(data.pets);
  }
  if (params.includes("cities")) {
    str += randomFromArray(data.cities);
  }
  // group 2
  if (params.includes("colors")) {
    str += randomFromArray(data.colors);
  }
  if (params.includes("dates")) {
    str += functions.randomYear();
  }
  if (params.includes("patterns")) {
    str += randomFromArray(data.patterns);
  }
  return str;
}

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
