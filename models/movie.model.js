import { model, Schema } from "mongoose";

// create schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  desc:{
    type:String,
    required:true,
  },
});

//create models
const Movie = model("Movie",schema)

export default Movie;
