
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import angleRoutes from './routes/angles.js';
import userRouter from "./routes/user.js";


const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/angles', angleRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://chirag773:chirag123@inspactio-6btjg.mongodb.net/cmc?retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);