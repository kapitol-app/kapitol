import express from 'express';
import mongoose from 'mongoose';
import config from '../config';
import socketHandler from '../handlers/socket';
import dbUtils from '../utils/queries';

const homeRouter = express.Router();

const mongoUri = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
    if (error) {
        return error;
    }
})

homeRouter.get('/member-list', (req,res) => {

    //SPECIFIC QUERY PARAM FOR QUERY UTILS
    const selection = `
        firstName
        lastName
        memberId
        -_id
    `;

    let results;

    dbUtils.queryDatabase('House', null, selection, (houseDocs) => {
        dbUtils.queryDatabase('Senate', null, selection, (senateDocs) => {
            results = houseDocs.concat(senateDocs);
            res.json(results);
        })
    });

})

homeRouter.get('/emit-test', (req,res) => {

    const socketServer = new socketHandler(config.env.TINMAN_PORT); //TO BE SET AS WHATEVER SERVER

    socketServer.emitTest({
        firstName: 'Bernard',
        lastName: 'Sanders'
    });
})


export default homeRouter;
