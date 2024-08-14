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
const URL=process.env.MONGODB_URL; 
Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();