import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

// //components
import Connection from './database/db.js';
import route from './routes/route.js';
import DefaultData from './default.js'

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', route);

const PORT = process.env.port || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL=`mongodb+srv://${username}:${password}@clone-inshorts.1j42a.mongodb.net/inshortsclone?retryWrites=true&w=majority&appName=clone-inshorts`; 
Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();