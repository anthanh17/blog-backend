// External lib
import {PrismaClient} from '@prisma/client'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import express from 'express';
import {createClient} from 'redis'

// Internal lib
import {postRouter} from './routes/postRoutes.js'
import {userRouter} from './routes/userRoutes.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;
export const prisma = new PrismaClient();

const redisClient = await createClient({
                 url: 'redis://redis-master:6379',
               })
                   .on('error', err => console.log('Redis Client error', err))
                   .connect();

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