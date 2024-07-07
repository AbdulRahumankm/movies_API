import { model, Schema } from "mongoose";

// create schema
const schema = new Schema({
  title: String,
  desc: String,
});

//create models
const Movie = model("Movie",schema)

export default Movie;
