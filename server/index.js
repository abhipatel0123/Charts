import express from "express";
import connectDB from "./config/connectDb.js";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./router/authRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDB();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
