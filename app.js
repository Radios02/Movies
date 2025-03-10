import express from "express";
import moviesRoutes from "./routes/movies.js";

const app = express();

app.use(express.json());
app.use("/movies", moviesRoutes);

app.listen(3020, () => {
  console.log("A szerver fut");
})