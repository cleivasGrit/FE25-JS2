import { Router } from "express";

export const commentRouter = Router();


commentRouter.get('/', (req, res)=>{
    res.json({message: 'get comment'})
})

// Från postman innebär detta /comments/genres
commentRouter.get('/genres', (req, res)=>{
    res.json({message: 'get genres'})
})
