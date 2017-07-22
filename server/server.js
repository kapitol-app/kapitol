'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import members from './routes/members';
import legislation from './routes/legislation';
import home from './routes/home';

const app = express();

//var db = mongoose.connect('mongodb://localhost/kapitol-db');

//Allow all requests from all domains & localhost
app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//API ROUTES
app.use('/api', home);
app.use('/api/members', members);
app.use('/api/legislation', legislation);


app.listen(3004, () => {
    console.log("Kapitol API running on port 3004");
};

