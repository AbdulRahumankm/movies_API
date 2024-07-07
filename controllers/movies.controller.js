import Movie from "../models/movie.model.js";

export const movieIndex=  (req, res) => {
    res.send("Get all movie lists");
};

export const create = async(req, res) => {
    // id , tittle , desc
    // console.log(req.body);
    //return res.json(req.body)
    //create the movie info 

   const newMovie = new Movie({
       title: req.body.title,
       desc : req.body.desc,
    })

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie)
    } catch (error) {
        return res.status(400).json({message:error.message})
    }

   

   
};

export const update = (req, res) => {
    res.send("update a movie");
};

export const remove =  (req, res) => {
    res.send("delete a movie");
};



