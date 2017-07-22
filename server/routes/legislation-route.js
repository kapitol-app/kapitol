import express from 'express';

let legislationRouter = express.Router();

legislationRouter.get('/fetch-legislation', (req,res) => {
    res.json({ legislationFetch: true });
})

export default legislationRouter;
