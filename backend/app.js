import dotenv from "dotenv";
dotenv.config();
import "./src/database";
import express from "express";

import cors from "cors";
import helmet from "helmet";
import delay from "express-delay";


import cadastroRoutes from "./src/routes/cadastroRoutes";

const whiteList = ["http://localhost:3001"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(delay(2000));
    this.app.use(cors());
  }
  routes() {

    this.app.use("/cadastro/", cadastroRoutes);
  }
}

export default new App().app;
