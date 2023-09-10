import express from "express";
import dotenv from "dotenv"
import {router} from "./routes/User.js"
import {PrismaClient} from '@prisma/client'

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});