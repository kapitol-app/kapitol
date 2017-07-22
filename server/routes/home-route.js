import express from 'express';

let homeRouter = express.Router();

homeRouter.get('/', (req,res) => {
    res.json({apiFetch: true});
})


export default homeRouter;