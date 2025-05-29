//////////////////////////////////////
/////////////// SERVER ///////////////
//////////////////////////////////////

// create express server
import express from "express";
const app = express();

// make all files inside /public available using static
import path from "path";
import { URL } from "url";
const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;
app.use(express.static(path.join(__dirname, '../public')));

// add a separate file for routes
import router from './routes.js';
app.use('/', router);

// start server
app.listen(3000, () => console.log("Your app is listening at: http://localhost:3000."));

// export app for vercel
export default app;