import type { Request, Response } from "express";
import { Router } from "express";
import { usersMiddleware } from "./middlewares";
import { body, validationResult } from "express-validator";

export const userRouter = Router();

type User = {
    name: string,
    isAdmin: boolean,
    rating: number,
}

// Vi behöver validera att objektet som kommer in via bodyn i en post request följer type User

const userValidations = [
    body('name').exists().isString(),
    body('isAdmin').exists().isBoolean(),
    body('rating').exists().isNumeric()
];

userRouter.use(usersMiddleware);

userRouter.get('/', (req, res)=>{
    saölkjfölkajds;
    res.json({message: 'get users'})
})

// Validera innehållet i body
userRouter.post('/', userValidations, (req:Request, res:Response)=>{
    const validationErrors = validationResult(req);
    console.log(validationErrors.array().length)
    console.log(req.body);

    if(validationErrors.array().length > 0){
        res.status(400).json({message: "User not added because of wrong format."})
    }

    res.json({message: 'New user added.',
        user: req.body
    })
})


userRouter.patch('/:id', (req, res)=>{
    res.json({message: `patch user ${req.params.id}`})
})

userRouter.delete('/:id', (req, res)=>{
    res.json({message: `delete user ${req.params.id}`})
})