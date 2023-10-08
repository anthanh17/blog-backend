// External lib
import {PrismaClient} from '@prisma/client'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import express from 'express';
import {createClient} from 'redis'

import {postRouter} from './routes/postRoutes.js'
// Internal lib
import {userRouter} from './routes/userRoutes.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;
export const prisma = new PrismaClient();

// const client = await createClient()
//                    .on('error', err => console.log('Redis Client error', err))
//                    .connect();

// (async () => {
//   redisClient = createClient();

//   redisClient.on('error', (error) => console.error(`Error : ${error}`));

//   await redisClient.connect();
// })();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

// api relevant to user
app.use('/', userRouter);

// APIs relevant to post
app.use('/', postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});