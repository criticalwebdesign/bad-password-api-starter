# Bad Password API

A password generator that only gives you terrible, regrettable, unacceptable, dreadful, awful, unusable passwords. Use the generator via the frontend (click "New password") or connect to the API from your own app.

- Get a commonly-used bad password
- Add parameters to generate a shiny new terrible password


## How does it work?

This project uses Node.js (backend) to returns data to the browser (frontend).

- `public/index.html`: The frontend for the API, uses client side JS to make requests to the server.
- `server.js`: [Node.js](https://nodejs.org/en/about/) runs Javascript in the backend using the [Fastify](https://www.fastify.io/) framework to start the server and import the `routes.js` file
- `routes.js` contains the endpoints that return new passwords
- `package.json`: The NPM packages for project dependencies

## Notes

- The [Bad Password API (Starter)](https://glitch.com/edit/#!/bad-password-api-starter) is a simpler version that appears in Chapter 9 "Data Tracking" in <em>Critical Web Design</em> by xtine burrough and Owen Mundy (MIT Press, 2025).
- Both the `bad-password-api` and `bad-password-api-starter` Git repos are exported from Glitch.
- To export from Glitch to Github: Click Tools > Import/Export > Export to Github