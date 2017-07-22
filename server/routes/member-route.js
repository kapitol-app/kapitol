import express from 'express';

let memberRouter = express.Router();

memberRouter.get('/fetch-member', (req,res) => {
    res.json({ fetchMembers: true });
})

export default memberRouter;