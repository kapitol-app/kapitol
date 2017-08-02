import express from 'express';
import mongoose from 'mongoose';
import config from '../config';
import query from '../utils/queries';

let memberRouter = express.Router();

const selection = `
    firstName
    lastName
    middleName
    facebookAccount
    twitterAccount
    youtubeAccount
    currentParty
    url
`;

const mongoUri = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
    if(error){
        return error;
    }
})

memberRouter.post('/fetch-member', (req,res) => {

    let results;

    query.queryHouse({memberId: req.body.id}, selection, (houseDocs) => {
        results = houseDocs;
        if (results.length > 0 ) {
            res.json(results);
        } else {
            query.querySenate({memberId: req.body.id}, selection, (senateDocs) => {
                results = senateDocs;
                res.json(results);
            })
        }
    })

});

export default memberRouter
