import express from "express";

const router = express.Router();

//R - For Reading
router.get("/movies", (req, res) => {
  res.send("Get all movie lists");
});

//C - For Create
router.post("/movies", (req, res) => {
    res.send("Create a movie");
});

//U - For Update
router.put("/movies/:id", (req, res) => {
    res.send("update a movie");
});

//D - For Delete
router.delete("/movies/:id", (req, res) => {
    res.send("delete a movie");
});

export default router;
