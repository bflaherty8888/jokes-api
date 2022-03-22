import { createJoke, deleteJoke, findAllJokes, findJoke, randomJoke, updateJoke } from "../controllers/joke.controller.js"

export default app => {
    app.get("/api/jokes", findAllJokes);
    app.get("/api/jokes/random", randomJoke);
    app.get("/api/jokes/:id", findJoke);
    app.post("/api/jokes/new", createJoke);
    app.put("/api/jokes/update/:id", updateJoke);
    app.delete("/api/jokes/delete/:id", deleteJoke);
}