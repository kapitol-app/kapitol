import express from 'express';
import mongoose from 'mongoose';
import config from '../config';
import dbUtils from '../utils/queries';

let memberRouter = express.Router();

const selection = `
    memberId
    firstName
    lastName
    middleName
    facebookAccount
    twitterAccount
    youtubeAccount
    currentParty
    url
    roles.state
    roles.district
    roles.title
    current_party
`;

const mongoUri = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
    if(error){
        return error;
    }
})

memberRouter.post('/fetch-member', (req,res) => {

    let results;

    dbUtils.queryDatabase('House', {memberId : req.body.id}, selection, (houseDocs) => {
        results = houseDocs;
        if (results.length > 0) {
            res.json(results);
        } else {
            dbUtils.queryDatabase('Senate', {memberId: req.body.id}, selection, (senateDocs) => {
                results = senateDocs;
                res.json(results);
            });
        }
    });


});

export default memberRouter
