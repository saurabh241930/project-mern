
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import categoriesRoutes from './routes/categories.js';
import userRoutes from "./routes/user.js";
import marbleRoutes from './routes/marbles.js'


const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/categories', categoriesRoutes);
app.use("/user", userRoutes);
app.use('/marbles',marbleRoutes)

const CONNECTION_URL = 'mongodb+srv://chirag773:chirag123@inspactio-6btjg.mongodb.net/cmc?retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);