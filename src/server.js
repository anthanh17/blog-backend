import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import {PrismaClient} from '@prisma/client'
import {userRouter} from "./routes/userRoutes.js"
import {postRouter} from "./routes/postRoutes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;
export const prisma = new PrismaClient()

app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

// api relevant to user
app.use('/', userRouter);

// APIs relevant to post
app.use('/', postRouter);

// app.get('/:postName', (req, res) => {
//   console.log("Test API postnam");
//   res.send(req.params);
// })

app.get('/test/:id', (req, res) => {
  console.log("Test param nodejs");
  res.send(req.params);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});