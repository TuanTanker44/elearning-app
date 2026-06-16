import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import testRoute from "./routes/test.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(json());
app.use(
  urlencoded({
    extended: true,
  }),
);

// Routes

app.use("/api/test", testRoute);

export default app;
