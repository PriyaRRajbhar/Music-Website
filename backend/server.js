import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/tunenest');   // local Mongo
const app = express();
app.use(cors());
app.use(express.json());

// simple GET /api/search?term=abc
import searchRoute from './routes/search.js';
app.use('/api/search', searchRoute);

const PORT = 5000;
app.listen(PORT, () => console.log('Backend running on ' + PORT));
