import Movie from "../models/movie.model.js";

export const movieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a movie
export const create = async (req, res) => {
  // id , tittle , desc
  // console.log(req.body);
  //return res.json(req.body)
  //create the movie info

  const newMovie = new Movie({
    // check the spell
    title: req.body.title,
    desc: req.body.desc,
  });
  console.log(req.body);

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const update = (req, res) => {
  res.send("update a movie");
};

export const remove = (req, res) => {
  res.send("delete a movie");
};
