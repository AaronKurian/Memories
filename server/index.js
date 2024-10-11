import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes);


app.use(bodyParser.json({ limit: "30mb", exxtended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", exxtended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://aaronabraham859:MLP098321qaz!@memoriescluster.mq1bv.mongodb.net/';
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);