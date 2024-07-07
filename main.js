import express from "express";

const app = express();
const PORT = 3030;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`This server is running at http://localhost${PORT}`);
});
