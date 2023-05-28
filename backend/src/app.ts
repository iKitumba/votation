import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use("*", (req, res) => {
  return res.status(404).json({ message: "Page not found" });
});

export { app };
