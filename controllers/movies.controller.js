export const movieIndex=  (req, res) => {
    res.send("Get all movie lists");
};

export const create = (req, res) => {
    // id , tittle , desc
    
    console.log(req.body);

   return res.json(req.body)
    //create the movie info
};

export const update = (req, res) => {
    res.send("update a movie");
};

export const remove =  (req, res) => {
    res.send("delete a movie");
};



