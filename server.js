import express, { json, urlencoded } from "express";
import "./server/config/mongoose.config.js";
import jokeRoutes from "./server/routes/joke.routes.js";

const app = express();

app.use(json(), urlencoded({ extended: true }));
jokeRoutes(app);

app.listen(8000, () => console.log("Server listening at 8000..."));