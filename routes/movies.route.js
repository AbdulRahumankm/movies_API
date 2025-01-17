import express from "express";
import {
  create,
  movieIndex,
  movieDetail,
  remove,
  update,
} from "../controllers/movies.controller.js";

const router = express.Router();

//R - For Reading
router.get("/", movieIndex);
router.get("/:id",movieDetail)

//C - For Create
router.post("/", create);

//U - For Update
router.put("/:id", update);

//D - For Delete
router.delete("/:id", remove);

export default router;
