import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express();
const PORT = 3030;

//Data Middleware understanding
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Connect DB
connectDB();


app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.use('/movies', movieRoutes)


app.listen(PORT, () => {
  console.log(`This server is running at http://localhost:${PORT}`);
});
