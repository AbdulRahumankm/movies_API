import Movie from "../models/movie.model.js";

//get method
export const movieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get method
export const movieDetail = async (req, res) => {
  //movieDetail
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie == null) {
      return res.status(404).json({ message: "Cannot find movie" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//POST method
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

//PUT method
export const update = async (req, res) => {
  // Validate the user input
  try {
    const result = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//DELETE method
export const remove = async (req, res) => {
  const movieId = req.params.id;

  try {
    await Movie.deleteOne({ _id: movieId });
    res.json({ message: "Movie deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
