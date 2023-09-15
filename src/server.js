import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import {userRouter} from "./routes/userRoutes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});