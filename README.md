# Bad Password API

A password generator that only gives you terrible, regrettable, unacceptable, dreadful, awful, and unusable passwords. 

- Get a commonly-used bad password
- Add parameters to generate a shiny new terrible password

You can use it via the frontend (clicking) or connect to the API from your own app. This project appears in Chapter 9 "Data Tracking" in <em>Critical Web Design</em> (MIT Press, 2025).


## How does it work?

This project includes a Node.js server script and a web page that connects to it. The front-end page presents a form the visitor can use to submit data, sending the values to the back-end API running on the server. The server returns info to the page based on the input.

- [Node.js](https://nodejs.org/en/about/) is a popular runtime that lets you run server-side JavaScript. This project uses the [Fastify](https://www.fastify.io/) framework.
- `public/index.html`: The frontend for the API
- `server.js`: The **Node.js** server script defines the endpoints in the site back-end: one with "api" that returns new passwords, and one to show the homepage presenting data from the API. 
- `package.json`: The NPM packages for your project's dependencies.


A fork of Glitch's `glitch-hello-node`