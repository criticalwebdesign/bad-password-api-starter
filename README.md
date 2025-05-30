# Bad Password API

A password generator that only gives you terrible, regrettable, unacceptable, dreadful, awful, unusable passwords. Use the generator frontend [bad-password-api.vercel.app](https://bad-password-api.vercel.app/) or connect to the API from your own app to:

- Get a commonly-used bad password
- Add parameters to generate a shiny new terrible password


## How does it work?

This project uses Node.js (backend) to returns data to the browser (frontend). 

- `public/index.html`: The frontend for the API, uses client side JS to make requests to the server.
- `api/index.js`: [Node.js](https://nodejs.org/en/about/) runs Javascript in the backend using the Express framework to start the server and import the `routes.js` file
- `api/routes.js` contains the endpoints that return new passwords
- `package.json`: The NPM packages for project dependencies



## Notes

- The finish version https://github.com/omundy/bad-password-api
- The starter project https://github.com/omundy/bad-password-api-starter appears in Chapter 9 "Data Tracking" in <em>Critical Web Design</em> by xtine burrough and Owen Mundy (MIT Press, 2025).




## Instructions

1. Clone the repo from Github
1. Run `npm install`
1. Start the app using `nodemon`

### Connect to the API

See Chapter 9 of Critical Web Design and use the starter version 
https://github.com/omundy/bad-password-api-starter


### Full-stack Instructions

1. Create a directory called `public` and move `index.html`, `main.js`, and `styles.css` into the directory
1. Publish on Vercel https://github.com/criticalwebdesign/book/wiki/Chapter-09#vercel-instructions