import mongoose from 'mongoose';

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minLength: [10, "Needs more setup."]
    },
    punchline: {
        type: String,
        minLength: [3, "Needs more punch."]
    }
});

const Joke = mongoose.model("Joke", JokeSchema);
export default Joke;