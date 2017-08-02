'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import members from './routes/member-route';
import legislation from './routes/legislation-route';
import home from './routes/home-route';

const app = express();

const io = require('socket.io-client');

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
app.use('/', home);
app.use('/members', members);
app.use('/legislation', legislation);


app.listen(3004, () => {
    console.log("Kapitol API running on port 3004");
});

