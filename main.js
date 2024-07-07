import express from "express";
import movieRoutes from "./routes/movies.route.js"

const app = express();
const PORT = 3030;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.use('/movies', movieRoutes)


app.listen(PORT, () => {
  console.log(`This server is running at http://localhost:${PORT}`);
});
