import Joke from "../models/joke.model.js";

export function findAllJokes(req, res) {
    Joke.find()
        .then(jokes => res.json({ jokes: jokes }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function findJoke(req, res) {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json({ joke: joke }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function createJoke(req, res) {
    Joke.create(req.body)
        .then(joke => res.json({ joke: joke }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function randomJoke(req, res) {
    Joke.find()
        .then(jokes => res.json({ joke: jokes[Math.floor(Math.random() * jokes.length)] }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function updateJoke(req, res) {
    Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(joke => res.json({ joke: joke }))
        .catch(e => res.json({ message: "Something went wrong", error: e }));
}

export function deleteJoke(req, res) {
    Joke.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }));
}
