import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

import userRoute from './app/modules/user/user.route';
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user",userRoute);
app.get("/",(req: Request, res: Response, next: NextFunction) => {

  res.send("Hello bro!")
})
export default app;
